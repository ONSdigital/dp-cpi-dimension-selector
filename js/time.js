var test = $('body').data('test');
console.log ('Viewing test: ', test);

var localData = JSON.parse(localStorage.getItem(test + '-selected')),
    customised = localData.customisedDimensions.time,
    $edit = $('#time--edit'),
    $add = $('#time--add'),
    selected = customised ? localData.times : {
        time: {
            "none": true,
            "all": false,
            "jan-1996": false,
            "feb-1996": false,
            "mar-1996": false,
            "apr-1996": false,
            "may-1996": false,
            "jun-1996": false,
            "jul-1996": false,
            "aug-1996": false,
            "sep-1996": false,
            "oct-1996": false,
            "nov-1996": false,
            "dec-1996": false,
            "jan-1997": false,
            "feb-1997": false,
            "mar-1997": false,
            "apr-1997": false,
            "may-1997": false,
            "jun-1997": false,
            "jul-1997": false,
            "aug-1997": false,
            "sep-1997": false,
            "oct-1997": false,
            "nov-1997": false,
            "dec-1997": false,
            "jan-1998": false,
            "feb-1998": false,
            "mar-1998": false,
            "apr-1998": false,
            "may-1998": false,
            "jun-1998": false,
            "jul-1998": false,
            "aug-1998": false,
            "sep-1998": false,
            "oct-1998": false,
            "nov-1998": false,
            "dec-1998": false,
            "jan-1999": false,
            "feb-1999": false,
            "mar-1999": false,
            "apr-1999": false,
            "may-1999": false,
            "jun-1999": false,
            "jul-1999": false,
            "aug-1999": false,
            "sep-1999": false,
            "oct-1999": false,
            "nov-1999": false,
            "dec-1999": false,
            "jan-2000": false,
            "feb-2000": false,
            "mar-2000": false,
            "apr-2000": false,
            "may-2000": false,
            "jun-2000": false,
            "jul-2000": false,
            "aug-2000": false,
            "sep-2000": false,
            "oct-2000": false,
            "nov-2000": false,
            "dec-2000": false,
            "jan-2001": false,
            "feb-2001": false,
            "mar-2001": false,
            "apr-2001": false,
            "may-2001": false,
            "jun-2001": false,
            "jul-2001": false,
            "aug-2001": false,
            "sep-2001": false,
            "oct-2001": false,
            "nov-2001": false,
            "dec-2001": false,
            "jan-2002": false,
            "feb-2002": false,
            "mar-2002": false,
            "apr-2002": false,
            "may-2002": false,
            "jun-2002": false,
            "jul-2002": false,
            "aug-2002": false,
            "sep-2002": false,
            "oct-2002": false,
            "nov-2002": false,
            "dec-2002": false,
            "jan-2003": false,
            "feb-2003": false,
            "mar-2003": false,
            "apr-2003": false,
            "may-2003": false,
            "jun-2003": false,
            "jul-2003": false,
            "aug-2003": false,
            "sep-2003": false,
            "oct-2003": false,
            "nov-2003": false,
            "dec-2003": false,
            "jan-2004": false,
            "feb-2004": false,
            "mar-2004": false,
            "apr-2004": false,
            "may-2004": false,
            "jun-2004": false,
            "jul-2004": false,
            "aug-2004": false,
            "sep-2004": false,
            "oct-2004": false,
            "nov-2004": false,
            "dec-2004": false,
            "jan-2005": false,
            "feb-2005": false,
            "mar-2005": false,
            "apr-2005": false,
            "may-2005": false,
            "jun-2005": false,
            "jul-2005": false,
            "aug-2005": false,
            "sep-2005": false,
            "oct-2005": false,
            "nov-2005": false,
            "dec-2005": false,
            "jan-2006": false,
            "feb-2006": false,
            "mar-2006": false,
            "apr-2006": false,
            "may-2006": false,
            "jun-2006": false,
            "jul-2006": false,
            "aug-2006": false,
            "sep-2006": false,
            "oct-2006": false,
            "nov-2006": false,
            "dec-2006": false,
            "jan-2007": false,
            "feb-2007": false,
            "mar-2007": false,
            "apr-2007": false,
            "may-2007": false,
            "jun-2007": false,
            "jul-2007": false,
            "aug-2007": false,
            "sep-2007": false,
            "oct-2007": false,
            "nov-2007": false,
            "dec-2007": false,
            "jan-2008": false,
            "feb-2008": false,
            "mar-2008": false,
            "apr-2008": false,
            "may-2008": false,
            "jun-2008": false,
            "jul-2008": false,
            "aug-2008": false,
            "sep-2008": false,
            "oct-2008": false,
            "nov-2008": false,
            "dec-2008": false,
            "jan-2009": false,
            "feb-2009": false,
            "mar-2009": false,
            "apr-2009": false,
            "may-2009": false,
            "jun-2009": false,
            "jul-2009": false,
            "aug-2009": false,
            "sep-2009": false,
            "oct-2009": false,
            "nov-2009": false,
            "dec-2009": false,
            "jan-2010": false,
            "feb-2010": false,
            "mar-2010": false,
            "apr-2010": false,
            "may-2010": false,
            "jun-2010": false,
            "jul-2010": false,
            "aug-2010": false,
            "sep-2010": false,
            "oct-2010": false,
            "nov-2010": false,
            "dec-2010": false,
            "jan-2011": false,
            "feb-2011": false,
            "mar-2011": false,
            "apr-2011": false,
            "may-2011": false,
            "jun-2011": false,
            "jul-2011": false,
            "aug-2011": false,
            "sep-2011": false,
            "oct-2011": false,
            "nov-2011": false,
            "dec-2011": false,
            "jan-2012": false,
            "feb-2012": false,
            "mar-2012": false,
            "apr-2012": false,
            "may-2012": false,
            "jun-2012": false,
            "jul-2012": false,
            "aug-2012": false,
            "sep-2012": false,
            "oct-2012": false,
            "nov-2012": false,
            "dec-2012": false,
            "jan-2013": false,
            "feb-2013": false,
            "mar-2013": false,
            "apr-2013": false,
            "may-2013": false,
            "jun-2013": false,
            "jul-2013": false,
            "aug-2013": false,
            "sep-2013": false,
            "oct-2013": false,
            "nov-2013": false,
            "dec-2013": false,
            "jan-2014": false,
            "feb-2014": false,
            "mar-2014": false,
            "apr-2014": false,
            "may-2014": false,
            "jun-2014": false,
            "jul-2014": false,
            "aug-2014": false,
            "sep-2014": false,
            "oct-2014": false,
            "nov-2014": false,
            "dec-2014": false,
            "jan-2015": false,
            "feb-2015": false,
            "mar-2015": false,
            "apr-2015": false,
            "may-2015": false,
            "jun-2015": false,
            "jul-2015": false,
            "aug-2015": false,
            "sep-2015": false,
            "oct-2015": false,
            "nov-2015": false,
            "dec-2015": false,
            "jan-2016": false,
            "feb-2016": false,
            "mar-2016": false,
            "apr-2016": false,
            "may-2016": false,
            "jun-2016": false,
            "jul-2016": false,
            "aug-2016": false,
            "sep-2016": false,
            "oct-2016": false
        },
        addRange: []
        };

var addView = {

    init: function() {
        $add.addClass('active');
        this.bindElements();

        // Toggle radios to show range on init
        $('#add__options').val('range').change();
    },

    updateTimesState: function() {
        var fromTime = selected.addRange[0],
            toTime = selected.addRange[1],
            withinRange = false; // flag to show when loop in within range of fromTime and toTime

        console.log("Save range " + fromTime + " to " + toTime + " to state");

        $.each(selected.time, function(key) {
            if (key === fromTime) {
                withinRange = true;
            }

            if (withinRange && !selected.time[key]) {
                selected.time[key] = true;
            }

            if (key === toTime) {
                withinRange = false;
            }
        });
    },

    bindElements: function() {
        this.bindAddClick();
        this.bindDateRangeSelects();
        this.bindDateTypeRadio();
    },

    bindDateTypeRadio: function() {
        $('#add__options').off().change(function() {
           var value = $(this).find(':checked').val();

            if (value === "month") {
                addView.renderSelect.month();
                addView.bindDateSingleSelects();
                return;
            }

            if (value === "range") {
                addView.renderSelect.range();
                addView.bindDateRangeSelects();
            }
        });
    },

    bindDateSingleSelects: function() {
        $('.js-select-single').off().on('change', function() {
            var singleDate = $('#select-single-month').val() + '-' + $('#select-single-year').val();

            console.log('Selected single date ' + singleDate);
            selected.addRange = [singleDate, singleDate];
        });

        // Force a change event, so if someone clicks add instantly they get default selection
        $('#select-single-month').change();
    },

    bindDateRangeSelects: function() {
        $('.js-select-range').off().on('change', function() {
            var fromFullDate = $('#select-from-month').val() + '-' + $('#select-from-year').val(),
                toFullDate = $('#select-to-month').val()  + '-' + $('#select-to-year').val();

            console.log('Selected range ' + fromFullDate + " to " + toFullDate);
            selected.addRange = [fromFullDate, toFullDate];
        });

        // Force a change event, so if someone clicks add instantly they get default selection
        $('#select-from-month').change();
    },

    bindAddClick: function() {
        $('#add').off().submit(function(event) {
            event.preventDefault();

            addView.updateTimesState();

            localData.customisedDimensions.time = true;
            localData.time = selected;

            localStorage.setItem(test + '-selected', JSON.stringify(localData));

            $add.removeClass('active');
            editView.init();
        });
    },

    buildSelectOptions: {
        years:
            '<option value="1996" name="1996">1996</option>' +
            '<option value="1997" name="1997">1997</option>' +
            '<option value="1998" name="1998">1998</option>' +
            '<option value="1999" name="1999">1999</option>' +
            '<option value="2000" name="2000">2000</option>' +
            '<option value="2001" name="2001">2001</option>' +
            '<option value="2002" name="2002">2002</option>' +
            '<option value="2003" name="2003">2003</option>' +
            '<option value="2004" name="2004">2004</option>' +
            '<option value="2005" name="2005">2005</option>' +
            '<option value="2006" name="2006">2006</option>' +
            '<option value="2007" name="2007">2007</option>' +
            '<option value="2008" name="2008">2008</option>' +
            '<option value="2009" name="2009">2009</option>' +
            '<option value="2010" name="2010">2010</option>' +
            '<option value="2011" name="2011">2011</option>' +
            '<option value="2012" name="2012">2012</option>' +
            '<option value="2013" name="2013">2013</option>' +
            '<option value="2014" name="2014">2014</option>' +
            '<option value="2015" name="2015">2015</option>' +
            '<option value="2016" name="2016">2016</option>',

        months:
            '<option value="jan" name="jan">January</option>' +
            '<option value="feb" name="feb">February</option>' +
            '<option value="mar" name="mar">March</option>' +
            '<option value="apr" name="apr">April</option>' +
            '<option value="may" name="may">May</option>' +
            '<option value="jun" name="jun">June</option>' +
            '<option value="jul" name="jul">July</option>' +
            '<option value="aug" name="aug">August</option>' +
            '<option value="sep" name="sep">September</option>' +
            '<option value="oct" name="oct">October</option>' +
            '<option value="nov" name="nov">November</option>' +
            '<option value="dec" name="dec">December</option>'
    },

    renderSelect: {
        month: function() {
            var yearsSelect = '<select class="js-select-single" id="select-single-year">' + addView.buildSelectOptions.years + '</select>',
                monthsSelect = '<select class="js-select-single" id="select-single-month">' + addView.buildSelectOptions.months + '</select>';

            document.getElementById('add__select').innerHTML = ['<div class="margin-top--3">', monthsSelect, yearsSelect, '</div>'].join('');
        },

        range: function() {
            var fromYearsSelect = '<select class="js-select-range" id="select-from-year">' + addView.buildSelectOptions.years + '</select>',
                fromMonthsSelect = '<select class="js-select-range" id="select-from-month">' + addView.buildSelectOptions.months + '</select>',
                toYearsSelect = '<select class="js-select-range" id="select-to-year">' + addView.buildSelectOptions.years + '</select>',
                toMonthsSelect = '<select class="js-select-range" id="select-to-month">' + addView.buildSelectOptions.months + '</select>';

            document.getElementById('add__select').innerHTML = ['<div class="margin-top--3">From</div>', fromMonthsSelect, fromYearsSelect, '<div class="margin-top--2">To</div>', toMonthsSelect, toYearsSelect].join('');

            // Set to date to show last possible date
            $('#select-to-month').val('oct');
            $('#select-to-year').val('2016');
        }
    }
};

var editView = {
    init: function() {
        $edit.addClass('active');
        this.renderCheckboxes();
        this.updateOnCheckboxChange();
        this.bindElements();
    },

    renderCheckboxes: function() {
        document.getElementById('edit__checkboxes').innerHTML = this.buildCheckboxes();
    },

    buildCheckboxes: function() {
        var checkboxes = [];

        $.each(selected.time, function(key, checked) {
            // Date not checked or is the 'all checked' or 'none checked' flag, so don't include in available checkboxes.
            if (!checked || key === 'all' || key === 'none') {
                return;
            }

            var thisCheckbox =
                '<div class="checkbox">' +
                    '<input value="' + key + '" class="js-edit-checkbox" id="checkbox-' + key + '" type="checkbox" checked>' +
                    '<label for="checkbox-' + key + '">' + utilities.mapShortDateToFullDate(key) + '</label>' +
                '</div>';

            checkboxes.push(thisCheckbox);
        });

        return checkboxes.join('');
    },

    updateOnCheckboxChange: function() {
        var checkboxes = document.querySelectorAll('.js-edit-checkbox'),
            checkboxesLength = checkboxes.length,
            numberChecked = 0,
            showDeselect = false,
            i;

        for (i = 0; i < checkboxesLength; i++) {
            if (!checkboxes[i].checked) {
                selected.time['all'] = false;
                $('.js-select-all').show();
                $('.js-deselect-all').hide();
                showDeselect = false;
            } else {
                numberChecked++;
                showDeselect = true;
            }
        }

        if (showDeselect) {
            selected.time['all'] = true;
            $('.js-select-all').hide();
            $('.js-deselect-all').show();
        }

        selected.time.none = (numberChecked === 0);
    },

    bindElements: function() {
        this.bindCheckboxes();
        this.bindFormSubmit();
        this.bindAddMore();
        this.bindSelectAll();
        this.bindDeselectAll();
    },

    bindSelectAll: function() {
        $('.js-select-all').off().click(function(){
            var checkboxes = document.querySelectorAll('.js-edit-checkbox'),
                checkboxesLength = checkboxes.length,
                i;

            for (i = 0; i < checkboxesLength; i++) {
                if (!checkboxes[i].checked) {
                    checkboxes[i].checked = true;
                    $(checkboxes[i]).change();
                }
            }

            // $('.js-select-all, .js-deselect-all').toggle();
        });
    },

    bindDeselectAll: function() {
        $('.js-deselect-all').off().click(function(){
            var checkboxes = document.querySelectorAll('.js-edit-checkbox'),
                checkboxesLength = checkboxes.length,
                i;

            for (i = 0; i < checkboxesLength; i++) {
                if (checkboxes[i].checked) {
                    checkboxes[i].checked = false;
                    $(checkboxes[i]).change();
                }
            }

            // $('.js-select-all, .js-deselect-all').toggle();
        });
    },

    bindAddMore: function() {
        $('.js-add-times').off().click(function() {
            $edit.removeClass('active');
            addView.init();
        });
    },

    bindCheckboxes: function() {
        $('.js-edit-checkbox').off().change(function() {
            var $this = $(this),
                thisDate = $this.val();

            editView.updateOnCheckboxChange();
            selected.time[thisDate] = $this.is(':checked');
        });
    },

    bindFormSubmit: function() {
        $('#edit').off().submit(function(event) {
            event.preventDefault();

            if (selected.time['none']) {
                $('#edit__validation').empty().html('Select at least one date');
                return;
            }

            localData.times = selected;

            localStorage.setItem(test + '-selected', JSON.stringify(localData));

            window.location.pathname = utilities.getRelativePath('selector.html');
        });
    }
};

if (customised) {
    editView.init();
} else {
    addView.init();
}
