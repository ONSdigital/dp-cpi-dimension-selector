var test = $('body').data('test');
console.log ('Viewing test: ', test);

var hasLocalData = JSON.parse(localStorage.getItem(test + '-selected')),
    $edit = $('#time--edit'),
    $add = $('#time--add'),
    selected = hasLocalData || {
        age: {
            "all": true,
            "16-and-over": true,
            "16-to-24": true,
            "25-to-34": true,
            "35-to-49": true,
            "50-and-over": true
        },
        sex: {
            "all": true,
            "female": true,
            "male": true
        },
        residence: {
            "all": true,
            "household": true,
            "communal": true
        },
        time: {
                "none": false,
                "all": true,
                "jan-1996": true,
                "feb-1996": true,
                "mar-1996": true,
                "apr-1996": true,
                "may-1996": true,
                "jun-1996": true,
                "jul-1996": true,
                "aug-1996": true,
                "sep-1996": true,
                "oct-1996": true,
                "nov-1996": true,
                "dec-1996": true,
                "jan-1997": true,
                "feb-1997": true,
                "mar-1997": true,
                "apr-1997": true,
                "may-1997": true,
                "jun-1997": true,
                "jul-1997": true,
                "aug-1997": true,
                "sep-1997": true,
                "oct-1997": true,
                "nov-1997": true,
                "dec-1997": true,
                "jan-1998": true,
                "feb-1998": true,
                "mar-1998": true,
                "apr-1998": true,
                "may-1998": true,
                "jun-1998": true,
                "jul-1998": true,
                "aug-1998": true,
                "sep-1998": true,
                "oct-1998": true,
                "nov-1998": true,
                "dec-1998": true,
                "jan-1999": true,
                "feb-1999": true,
                "mar-1999": true,
                "apr-1999": true,
                "may-1999": true,
                "jun-1999": true,
                "jul-1999": true,
                "aug-1999": true,
                "sep-1999": true,
                "oct-1999": true,
                "nov-1999": true,
                "dec-1999": true,
                "jan-2000": true,
                "feb-2000": true,
                "mar-2000": true,
                "apr-2000": true,
                "may-2000": true,
                "jun-2000": true,
                "jul-2000": true,
                "aug-2000": true,
                "sep-2000": true,
                "oct-2000": true,
                "nov-2000": true,
                "dec-2000": true,
                "jan-2001": true,
                "feb-2001": true,
                "mar-2001": true,
                "apr-2001": true,
                "may-2001": true,
                "jun-2001": true,
                "jul-2001": true,
                "aug-2001": true,
                "sep-2001": true,
                "oct-2001": true,
                "nov-2001": true,
                "dec-2001": true,
                "jan-2002": true,
                "feb-2002": true,
                "mar-2002": true,
                "apr-2002": true,
                "may-2002": true,
                "jun-2002": true,
                "jul-2002": true,
                "aug-2002": true,
                "sep-2002": true,
                "oct-2002": true,
                "nov-2002": true,
                "dec-2002": true,
                "jan-2003": true,
                "feb-2003": true,
                "mar-2003": true,
                "apr-2003": true,
                "may-2003": true,
                "jun-2003": true,
                "jul-2003": true,
                "aug-2003": true,
                "sep-2003": true,
                "oct-2003": true,
                "nov-2003": true,
                "dec-2003": true,
                "jan-2004": true,
                "feb-2004": true,
                "mar-2004": true,
                "apr-2004": true,
                "may-2004": true,
                "jun-2004": true,
                "jul-2004": true,
                "aug-2004": true,
                "sep-2004": true,
                "oct-2004": true,
                "nov-2004": true,
                "dec-2004": true,
                "jan-2005": true,
                "feb-2005": true,
                "mar-2005": true,
                "apr-2005": true,
                "may-2005": true,
                "jun-2005": true,
                "jul-2005": true,
                "aug-2005": true,
                "sep-2005": true,
                "oct-2005": true,
                "nov-2005": true,
                "dec-2005": true,
                "jan-2006": true,
                "feb-2006": true,
                "mar-2006": true,
                "apr-2006": true,
                "may-2006": true,
                "jun-2006": true,
                "jul-2006": true,
                "aug-2006": true,
                "sep-2006": true,
                "oct-2006": true,
                "nov-2006": true,
                "dec-2006": true,
                "jan-2007": true,
                "feb-2007": true,
                "mar-2007": true,
                "apr-2007": true,
                "may-2007": true,
                "jun-2007": true,
                "jul-2007": true,
                "aug-2007": true,
                "sep-2007": true,
                "oct-2007": true,
                "nov-2007": true,
                "dec-2007": true,
                "jan-2008": true,
                "feb-2008": true,
                "mar-2008": true,
                "apr-2008": true,
                "may-2008": true,
                "jun-2008": true,
                "jul-2008": true,
                "aug-2008": true,
                "sep-2008": true,
                "oct-2008": true,
                "nov-2008": true,
                "dec-2008": true,
                "jan-2009": true,
                "feb-2009": true,
                "mar-2009": true,
                "apr-2009": true,
                "may-2009": true,
                "jun-2009": true,
                "jul-2009": true,
                "aug-2009": true,
                "sep-2009": true,
                "oct-2009": true,
                "nov-2009": true,
                "dec-2009": true,
                "jan-2010": true,
                "feb-2010": true,
                "mar-2010": true,
                "apr-2010": true,
                "may-2010": true,
                "jun-2010": true,
                "jul-2010": true,
                "aug-2010": true,
                "sep-2010": true,
                "oct-2010": true,
                "nov-2010": true,
                "dec-2010": true,
                "jan-2011": true,
                "feb-2011": true,
                "mar-2011": true,
                "apr-2011": true,
                "may-2011": true,
                "jun-2011": true,
                "jul-2011": true,
                "aug-2011": true,
                "sep-2011": true,
                "oct-2011": true,
                "nov-2011": true,
                "dec-2011": true,
                "jan-2012": true,
                "feb-2012": true,
                "mar-2012": true,
                "apr-2012": true,
                "may-2012": true,
                "jun-2012": true,
                "jul-2012": true,
                "aug-2012": true,
                "sep-2012": true,
                "oct-2012": true,
                "nov-2012": true,
                "dec-2012": true,
                "jan-2013": true,
                "feb-2013": true,
                "mar-2013": true,
                "apr-2013": true,
                "may-2013": true,
                "jun-2013": true,
                "jul-2013": true,
                "aug-2013": true,
                "sep-2013": true,
                "oct-2013": true,
                "nov-2013": true,
                "dec-2013": true,
                "jan-2014": true,
                "feb-2014": true,
                "mar-2014": true,
                "apr-2014": true,
                "may-2014": true,
                "jun-2014": true,
                "jul-2014": true,
                "aug-2014": true,
                "sep-2014": true,
                "oct-2014": true,
                "nov-2014": true,
                "dec-2014": true,
                "jan-2015": true,
                "feb-2015": true,
                "mar-2015": true,
                "apr-2015": true,
                "may-2015": true,
                "jun-2015": true,
                "jul-2015": true,
                "aug-2015": true,
                "sep-2015": true,
                "oct-2015": true,
                "nov-2015": true,
                "dec-2015": true,
                "jan-2016": true,
                "feb-2016": true,
                "mar-2016": true,
                "apr-2016": true,
                "may-2016": true,
                "jun-2016": true,
                "jul-2016": true,
                "aug-2016": true,
                "sep-2016": true,
                "oct-2016": true
            }
    };

var addView = {

    init: function() {
        $add.addClass('active');
        this.renderSelect.range();
        this.bindElements();
    },

    updateTimesState: function(fromTime, toTime) {
        var withinRange = false; // flag to show when loop in within range of fromTime and toTime

        $.each(selected.time, function(key) {
            if (key === fromTime) {
                withinRange = true;
            }

            selected.time[key] = withinRange;

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
        $('#add__options').change(function() {
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
        $('.js-select-single').on('change', function() {
            var singleDate = $('#select-single-month').val() + '-' + $('#select-single-year').val();

            addView.updateTimesState(singleDate, singleDate);
        });
    },

    bindDateRangeSelects: function() {
        $('.js-select-range').on('change', function() {
            var fromFullDate = $('#select-from-month').val() + '-' + $('#select-from-year').val(),
                toFullDate = $('#select-to-month').val()  + '-' + $('#select-to-year').val();

            addView.updateTimesState(fromFullDate, toFullDate);
        });
    },

    bindAddClick: function() {
        $('#add').submit(function(event) {
            event.preventDefault();

            localStorage.setItem(test + '-selected', JSON.stringify(selected));

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

            $('#select-single-month').change();
        },

        range: function() {
            var fromYearsSelect = '<select class="js-select-range" id="select-from-year">' + addView.buildSelectOptions.years + '</select>',
                fromMonthsSelect = '<select class="js-select-range" id="select-from-month">' + addView.buildSelectOptions.months + '</select>',
                toYearsSelect = '<select class="js-select-range" id="select-to-year">' + addView.buildSelectOptions.years + '</select>',
                toMonthsSelect = '<select class="js-select-range" id="select-to-month">' + addView.buildSelectOptions.months + '</select>';

            document.getElementById('add__select').innerHTML = ['<div class="margin-top--3">From</div>', fromMonthsSelect, fromYearsSelect, '<div class="margin-top--2">To</div>', toMonthsSelect, toYearsSelect].join('');

            // Set to date to show last possible date
            $('#select-to-month').val('oct');
            $('#select-to-year').val('2016').change();
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

        if (numberChecked === 0) {
            selected.time.none = true;
        } else {
            selected.time.none = false;
        }
    },

    bindElements: function() {
        this.bindCheckboxes();
        this.bindFormSubmit();
        this.bindAddMore();
        this.bindSelectAll();
        this.bindDeselectAll();
    },

    bindSelectAll: function() {
        $('.js-select-all').click(function(){
            var checkboxes = document.querySelectorAll('.js-edit-checkbox'),
                checkboxesLength = checkboxes.length,
                i;

            for (i = 0; i < checkboxesLength; i++) {
                if (!checkboxes[i].checked) {
                    checkboxes[i].checked = true;
                    $(checkboxes[i]).change();
                }
            }

            $('.js-select-all, .js-deselect-all').toggle();
        });
    },

    bindDeselectAll: function() {
        $('.js-deselect-all').click(function(){
            var checkboxes = document.querySelectorAll('.js-edit-checkbox'),
                checkboxesLength = checkboxes.length,
                i;

            for (i = 0; i < checkboxesLength; i++) {
                if (checkboxes[i].checked) {
                    checkboxes[i].checked = false;
                    $(checkboxes[i]).change();
                }
            }

            $('.js-select-all, .js-deselect-all').toggle();
        });
    },

    bindAddMore: function() {
        $('.js-add-times').click(function() {
            $edit.removeClass('active');
            addView.init();
        });
    },

    bindCheckboxes: function() {
        $('.js-edit-checkbox').change(function() {
            var $this = $(this),
                thisDate = $this.val();

            editView.updateOnCheckboxChange();
            selected.time[thisDate] = $this.is(':checked');
        });
    },

    bindFormSubmit: function() {
        $('#edit').submit(function(event) {
            event.preventDefault();

            console.log(selected.time['none']);

            if (selected.time['none']) {
                $('#edit__validation').empty().html('Select at least one date');
                return;
            }

            localStorage.setItem(test + '-selected', JSON.stringify(selected));

            window.location.pathname = '/selector.html';
        });
    }
};

if (hasLocalData) {
    editView.init();
} else {
    addView.init();
}
