var test = $('body').data('test');
console.log ('Viewing test: ', test);

var selected = JSON.parse(localStorage.getItem(test + '-selected')) || {
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

$('.js-change-sex').click( function() {

    var modalName = $(this).data('modal');
    setCheckBoxesInModal(modalName);
    openModal(modalName);
    setSelectAllButton(modalName);
    onCheckBoxChange(modalName);

    $('#options__sex-save').click(function(e) {
        e.preventDefault();

        $('.selected-' + modalName).empty();

        getCheckBoxesInModal(modalName);

        saveToLocalStorage();

        $('#options__sex-save').off();
        $('.options__sex').hide();
    });

});

$('.js-change-age').click( function() {

    var modalName = $(this).data('modal');
    setCheckBoxesInModal(modalName);
    openModal(modalName);
    setSelectAllButton(modalName);
    onCheckBoxChange(modalName);

    $('#options__age-save').click(function(e) {
        e.preventDefault();

        $('.selected-' + modalName).empty();

        getCheckBoxesInModal(modalName);

        saveToLocalStorage();

        $('#options__age-save').off();
        $('.options__age').hide();
    });

});

$('.js-change-time').click( function() {

    var modalName = $(this).data('modal');
    setCheckBoxesInModal(modalName);
    openModal(modalName);
    setSelectAllButton(modalName);
    onCheckBoxChange(modalName);

    $('#options__time-save').click(function(e) {
        e.preventDefault();

        $('.selected-' + modalName).empty();

        getCheckBoxesInModal(modalName);

        saveToLocalStorage();

        $('#options__time-save').off();
        $('.options__time').hide();
    });

});

$('.js-change-residence').click( function() {

    var modalName = $(this).data('modal');
    setCheckBoxesInModal(modalName);
    openModal(modalName);
    setSelectAllButton(modalName);
    onCheckBoxChange(modalName);

    $('#options__residence-save').click(function(e) {
        e.preventDefault();

        $('.selected-' + modalName).empty();

        getCheckBoxesInModal(modalName);

        saveToLocalStorage();

        $('#options__residence-save').off();
        $('.options__residence').hide();
    });

});

$('.js-close-modal').click(function(e) {
    e.preventDefault();
    var modalName = $(this).data('modal');
    $('.options__' + modalName).hide();
});

function openModal(modalClass) {
    $('.options__' + modalClass).show();
}

function setCheckBoxesInModal(modalClass) {
    $('.options__' + modalClass).find('input').each( function() {
        var option = $(this).data('option');
        var dimension = $(this).data('dimension');
        if (selected[dimension][option]) {
            $(this).prop( "checked", true )
        } else {
            $(this).prop( "checked", false )
        }

    });
}

function getCheckBoxesInModal(modalClass) {
    $('.options__' + modalClass).find('input').each( function() {
        var option = $(this).data('option');
        var dimension = $(this).data('dimension');
        var labelText = $(this).next().text();
        var selectedList = $('.selected-' + modalClass);

        if ($(this).prop( "checked" )) {
            selected[dimension][option] = true;

            //edge case for time with year
            var yearPosixMatch = option.match(/-(\d\d\d\d)$/);
            if (yearPosixMatch && yearPosixMatch.length > 0) {
                labelText += ', ' + yearPosixMatch[1]
            }

            selectedList.append(wrapInDiv(labelText));
        } else {
            selected[dimension][option] = false;
        }

    });
}

function getTimeRange(timeRangeArray) {
    // var from = utilities.mapShortDateToFullDate(selected.time.times[0]),
    //     to = utilities.mapShortDateToFullDate(selected.time.times[selected.time.times.length-1]);

    var from = utilities.mapShortDateToFullDate(timeRangeArray[0]),
        to =  utilities.mapShortDateToFullDate(timeRangeArray[1]);

    return (from === to) ? from : from + " to " + to;
}

function wrapInDiv(text) {
    return $('<div class="selected__item">' + text + '</div>');
}

function saveToLocalStorage() {
    localStorage.setItem(test + '-selected', JSON.stringify(selected));
}


/* Builds and render the selected options on selector page **/
// $(function(){
//     $.each(selected, function(key, value) {
//         var selectedList = $('.selected-' + key),
//             count = 0,
//             timeRange = [],
//             selectedText = "",
//             allChildrenSelected = true;
//
//         // Not looping through time dimension, so being ignored for the moment. Will need to add in special aggregate later, so this should probably be removed then.
//         if (key !== "time") {
//             return;
//         }
//
//         $.each(value, function(childKey, childValue) {
//
//             // Time set to false, ignore
//             if (!childValue) {
//                 allChildrenSelected = false;
//                 return;
//             }
//
//             // If this is first valid key then set first time (used later in date range)
//             if (!timeRange[0]) {
//                 timeRange[0] = childKey;
//             }
//
//             // Set last time in range
//             timeRange[1] = childKey;
//
//             count++
//         });
//
//         if (allChildrenSelected) {
//             selectedText = "Everything selected (" + count + ") <br>";
//         }
//
//         selectedText += getTimeRange(timeRange);
//
//         selectedList.append(wrapInDiv(selectedText));
//     });
// });

/* Populate selected times */
$(function(){
        var selectedList = $('.selected-time'),
            count = 0,
            selectedText = "",
            allChildrenSelected = !selected.time['none'];

        $.each(selected.time, function(childKey, childValue) {
            // Ignore all flags
            if (childKey === "all" || childKey === "none") {
                return;
            }

            // Time set to false, ignore
            if (!childValue) {
                allChildrenSelected = false;
                return;
            }

            count++
        });

        if (allChildrenSelected) {
            selectedText = "Everything selected (" + count + ") <br>";
        } else {
            selectedText = "Custom selection (" + count + ") <br>";
        }

        selectedList.append(wrapInDiv(selectedText));
});

function setSelectAllButton(modalClass) {
    $('.options__' + modalClass).find('input').each( function() {
        $('.js-select-all').hide();
        $('.js-deselect-all').show();
        if ($(this).prop('checked') != true) {
            $('.js-select-all').show();
            $('.js-deselect-all').hide();
            return false;
        }

    });
}

function onCheckBoxChange(modalClass) {
    $('input').on( "change", function() {
        //alert( "Handler for .change() called." );
        setSelectAllButton(modalClass)
    });
}

$('.js-select-all').click(function() {
    $(this).siblings('form').find('input').each( function() {
        $(this).prop( "checked", true );
    });
    $('.js-select-all').hide();
    $('.js-deselect-all').show();
});

$('.js-deselect-all').click(function() {
    $(this).siblings('form').find('input').each( function() {
        $(this).prop( "checked", false );
    });
    $('.js-select-all').show();
    $('.js-deselect-all').hide();
});
