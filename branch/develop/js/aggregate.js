
var test = $('body').data('test');
console.log ('Viewing test: ', test);

var localData = JSON.parse(localStorage.getItem(test + '-selected')),
    customised = localData.customisedDimensions.aggregates,
    $edit = $('#aggregates--edit'),
    $add = $('#aggregates--add'),
    $confirm = $('#aggregates--confirm'),
    aggregates = buildData(),
    selectedAggregates = [];

function buildData() {
    var aggregatesLength = utilities.defaultState.aggregates.length,
        newAggregates = [],
        i;

    for (i = 0; i < aggregatesLength; i++) {
        var thisObject = {};

        thisObject.uid = utilities.defaultState.aggregates[i].uid;
        thisObject.title = utilities.defaultState.aggregates[i].title;
        thisObject.children = utilities.defaultState.aggregates[i].children;
        thisObject.selected = false;

        newAggregates.push(thisObject);
    }

    return newAggregates;
}

var addView = {
    init: function() {
        console.log('Initialise add view');
        selectedAggregates = [];
        $add.addClass('active');
        this.renderCheckboxes();
        this.bind.all();
    },

    renderCheckboxes: function() {
        document.getElementById('form-add__checkboxes').innerHTML = this.getCheckboxesHTML();
    },

    getCheckboxesHTML: function() {
        var checkboxes = [],
            aggregatesLength = aggregates.length,
            i;

        for (i = 0; i < aggregatesLength; i++) {
            var checked = aggregates[i].selected ? "" : "",
                uid = !aggregates[i].uid ? "" : " (" + aggregates[i].uid + ")";

            checkboxes.push(
                '<div class="checkbox">' +
                    '<input data-index="' + i + '" class="form-add__checkbox" data-title="' + aggregates[i].title + '" type="checkbox" id="' + aggregates[i].uid + '" name="' + aggregates[i].uid + '">' +
                    '<label for="' + aggregates[i].uid + '">' + aggregates[i].title + uid + '</label>' +
                '</div>'
            );
        }

        return checkboxes.join('');

    },

    bind: {
        all : function() {
            this.checkboxes();
            this.submit();
        },

        checkboxes: function() {
            $('.form-add__checkbox').change(function() {
                var $this = $(this),
                    isChecked = $this.is(':checked');

                aggregates[$this.attr('data-index')].selected = isChecked;

                if (isChecked) {
                    selectedAggregates.push($this.attr('data-index'));
                    return;
                }

                for (var i in selectedAggregates) {
                    if (selectedAggregates[i] === $this.attr('data-index')) {
                        selectedAggregates.splice(i, 1);
                    }
                }

            });
        },

        submit: function() {
            $('#form-add').submit(function(event) {
                event.preventDefault();

                if (selectedAggregates.length === 0) {
                    document.getElementById('form-add__errors').innerHTML = "Select at least one option";
                    return;
                }

                $add.removeClass('active');
                confirmView.init();
            });
        }
    }
};

var editView = {
    init: function() {
        console.log('Initialise edit view');
        selectedAggregates = localData.selectedAggregates;
        $edit.addClass('active');
        this.renderSelections();
        this.bind.all();
    },

    renderSelections: function() {
        document.getElementById('form-edit__checkboxes').innerHTML = this.selectionsTemplate();
    },

    selectionsTemplate: function() {
        var checkboxes = [],
            aggregatesLength = selectedAggregates.length,
            i;

        for (i = 0; i < aggregatesLength; i++) {
            checkboxes.push(
                '<div class="checkbox">' +
                    '<input class="edit-checkbox" data-index="' + i + '" type="checkbox" id="' + localData.selectedAggregates[i].uid + '" name="' + localData.selectedAggregates[i].uid + '" checked>' +
                    '<label for="' + localData.selectedAggregates[i].uid + '">' + localData.selectedAggregates[i].title + '</label>' +
                '</div>'
            );
        }

        return checkboxes.join('');
    },

    bind: {
        all: function() {
            this.checkboxes();
            this.formSubmit();
            this.addMoreLink();
            this.selectDeselectLink();
        },

        checkboxes: function() {
            $('.edit-checkbox').change(function() {
                $('.deselect-all').hide();
                $('.select-all').show();

                var $this = $(this);
                selectedAggregates[$this.attr('data-index')].selected = $this.is(':checked');
            });
        },

        formSubmit: function() {
            $('#form-edit').submit(function(event) {
                event.preventDefault();

                var newSelectedAggregates = [],
                    noneSelected = true;

                selectedAggregates.map(function(thisObject) {
                    if (thisObject.selected) {
                        noneSelected = false;
                        newSelectedAggregates.push(thisObject);
                    }
                });

                if (noneSelected) {
                    document.getElementById('form-edit__errors').innerHTML = "Select at least one option";
                    return;
                }

                var newLocalData = localData;

                newLocalData.selectedAggregates = newSelectedAggregates;

                localStorage.setItem(test + '-selected', JSON.stringify(newLocalData));

                window.location.pathname = '/selector.html';
            });
        },

        addMoreLink: function() {
            $('#edit-add-more').click(function() {
                $('#form-edit__checkboxes').empty();
                $edit.removeClass('active');
                addView.init();
            });
        },

        selectDeselectLink: function() {
            $('.select-all').click(function() {
                $('.deselect-all').show();
                $('.select-all').hide();

                $('.edit-checkbox').attr('checked', true).change();
            });

            $('.deselect-all').click(function() {
                $('.deselect-all').hide();
                $('.select-all').show();

                $('.edit-checkbox').attr('checked', false).change();
            });
        }
    }
};

var confirmView = {
    init: function() {
        console.log('Initialise confirm view');
        this.render.allOrCustomise();
        $confirm.addClass('active');
        this.bind.allOrCustomiseSubmit();
    },

    render: {
        allOrCustomise: function() {
            var templateData = aggregates[selectedAggregates[0]],
                template = confirmView.templates.allOrCustomise(templateData);

            $confirm.html(template);

        },

        customise: function() {
            var templateData = aggregates[selectedAggregates[0]],
                template = confirmView.templates.customise(templateData);

            $confirm.html(template);
            confirmView.bind.customise();
        }
    },

    templates: {
        allOrCustomise: function(templateData) {
            return '<a href="selector.html" class="btn--everything margin-top--2">Back</a> ' +
                '<h1 id="form-confirm__title" class="margin-top--2 margin-bottom--1">Are you interested in the whole of "<span class="form-confirm__aggregate">' + templateData.title + '</span>"?</h1> ' +
                '<form id="form-confirm" class="margin-bottom--3"> ' +
                    '<fieldset> ' +
                        '<legend class="visuallyhidden">Are you interested in the whole of "<span class="form-confirm__aggregate">' + templateData.title + '</span>"?</legend> ' +
                        '<div id="form-confirm__radio" class="margin-top--2 margin-left--0 margin-bottom--2 padding-bottom--2 border-bottom--gallery-md col-wrap width-md--48 width-lg--48">' +
                            '<div class="radio" id="allOrCustom">' +
                                '<input type="radio" id="all" name="allOrCustom" value="all" checked><label for="all">I want all items (' + templateData.children.length +')</label>' +
                                '<input type="radio" id="custom" name="allOrCustom" value="custom"><label for="custom">I want to customise further</label>' +
                            '</div>' +
                        '</div> ' +
                    '</fieldset> ' +
                    '<button id="form-confirm__customise" class="btn btn--primary btn--thick btn--wide btn--big margin-top--4 margin-bottom--1">Next</button>' +
                    '<a class="btn btn--secondary btn--thick btn--wide btn--big margin-top--4 margin-bottom--8 margin-left--1" href="selector.html">Cancel</a>' +
                    '<span class="background--poppy block width--16 text-center" id="form-confirm__errors"></span> ' +
                '</form>'
        },

        customise: function(templateData) {
            var checkboxes = [],
                checkboxesLength = templateData.children.length,
                i;

            for (i = 0; i < checkboxesLength; i++) {
                checkboxes.push(
                    '<div class="checkbox">' +
                        '<input class="js-confirm-checkbox" name="' + templateData.children[i].uid + '" id="' + templateData.children[i].uid + '" type="checkbox" data-index="' + i + '">' +
                        '<label for="' + templateData.children[i].uid + '">' + templateData.children[i].title + '</label>' +
                    '</div>'
                );
            }

            return '<a href="selector.html" class="btn--everything margin-top--2">Back</a> ' +
                '<h1 id="form-confirm__title" class="margin-top--2 margin-bottom--1">Customise "<span class="form-confirm__aggregate">' + templateData.title + '</span>"</h1> ' +
                '<a href="javascript:void(0)">Select all</a>' +
                '<form id="form-confirm--customise" class="margin-bottom--3"> ' +
                    '<fieldset> ' +
                        '<legend class="visuallyhidden">Customise "<span class="form-confirm--customise__aggregate">' + templateData.title + '</span>"?</legend> ' +
                        '<div id="form-confirm--customise__checkboxes" class="margin-top--2 margin-left--0 margin-bottom--2 padding-bottom--2 border-bottom--gallery-md col-wrap width-md--48 width-lg--48">' +
                        checkboxes.join('') +
                        '</div> ' +
                    '</fieldset> ' +
                    '<button id="form-confirm--customise__next" class="btn btn--primary btn--thick btn--wide btn--big margin-top--4 margin-bottom--1">Next</button> ' +
                    '<a class="btn btn--secondary btn--thick btn--wide btn--big margin-top--4 margin-bottom--8 margin-left--1" href="selector.html">Cancel</a>' +
                    '<span class="background--poppy block width--16 text-center" id="form-confirm__errors"></span> ' +
                '</form>'
        }
    },

    bind: {
        allOrCustomiseSubmit: function() {
            $('#form-confirm').submit(function(event) {
                var radioValue = $('input[name="allOrCustom"]:checked').val();

                event.preventDefault();

                if (radioValue === 'all') {
                    var newSelectedAggregates = localData.selectedAggregates;

                    aggregates[selectedAggregates[0]]['children'].map(function(thisObject) {
                        var alreadySelected = (localData.selectedAggregates).some(function(aggregate) {
                            return (aggregate.title === thisObject.title);
                        });

                        if (!alreadySelected) {
                            thisObject.selected = true;
                            newSelectedAggregates.push(thisObject);
                        }
                    });

                    var newLocalData = localData;

                    newLocalData.selectedAggregates = newSelectedAggregates;
                    newLocalData.customisedDimensions.aggregates = true;

                    localStorage.setItem(test + '-selected', JSON.stringify(newLocalData));

                    selectedAggregates.splice(0, 1);

                    if (selectedAggregates.length === 0) {
                        window.location.pathname = '/aggregate.html';
                        return;
                    }


                    confirmView.render.allOrCustomise();
                    confirmView.bind.allOrCustomiseSubmit();
                    return;
                }

                if (radioValue === 'custom') {
                    $confirm.empty();
                    confirmView.render.customise();
                }
            });
        },

        customise: function() {
            var selectedIndices = [],
                newLocalData = localData;

            $('.js-confirm-checkbox').change(function() {
                var $this = $(this);
                if ($this.is(':checked')) {
                    selectedIndices.push($this.attr('data-index'));
                    return;
                }

                var valueIndex = selectedIndices.indexOf($this.attr('data-index'));
                selectedIndices.splice(valueIndex, 1);
            });

            $('#form-confirm--customise').submit(function(event) {
                event.preventDefault();

                var selectedLength = selectedIndices.length,
                    i;

                for (i = 0; i < selectedLength; i++) {
                    aggregates[selectedAggregates[0]].children[selectedIndices[i]].selected = true;
                    newLocalData.selectedAggregates.push(aggregates[selectedAggregates[0]].children[selectedIndices[i]]);
                }

                selectedAggregates.splice(0, 1);

                if (selectedAggregates.length === 0) {
                    window.location.pathname = '/aggregate.html';
                    newLocalData.customisedDimensions.aggregates = true;
                    localStorage.setItem(test + '-selected', JSON.stringify(newLocalData));
                    return;
                }

                confirmView.render.allOrCustomise();
                confirmView.bind.allOrCustomiseSubmit();
            });
        }
    }
};

if (customised) {
    editView.init();
} else {
    addView.init();
}
