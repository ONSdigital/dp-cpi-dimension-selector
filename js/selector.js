var test = $('body').data('test');
console.log ('Viewing test: ', test);

var localData = JSON.parse(localStorage.getItem(test + '-selected'));

if (!localData) {
    localStorage.setItem(test + '-selected', JSON.stringify(utilities.defaultState));
    localData = utilities.defaultState;
}

var selected = localData;

console.log(selected);

function wrapInDiv(text) {
    return $('<div class="selected__item">' + text + '</div>');
}

/* Populate special aggregates */
$(function() {
    var $aggregateList = $('.selected-aggregate'),
        count = 0,
        selectedText = "",
        i;

    if (selected.selectedAggregates.length > 0) {
        var selectedAggregatesLength = selected.selectedAggregates.length;

        for (i = 0; i < selectedAggregatesLength; i++) {
            count++
        }

        selectedText = "custom selection (" + count + ") <br>";
        $aggregateList.append(wrapInDiv(selectedText));

        return;
    }


    var aggregatesLength = selected.aggregates.length;

    for (i = 0; i < aggregatesLength; i++) {
       if (!selected.aggregates[i].selected) {
           return;
       }

       count++
    }

    // if (count === aggregatesLength) {
        selectedText = "everything selected (" + count + ") <br>";
    // } else {
    //     selectedText = "custom selection (" + count + ") <br>";
    // }

    $aggregateList.append(wrapInDiv(selectedText));
});

/* Populate selected times */
$(function(){
        var $selectedList = $('.selected-time'),
            count = 0,
            selectedText = "",
            allChildrenSelected = !selected.times.time['none'];

        $.each(selected.times.time, function(childKey, childValue) {
            // Ignore all and none flags
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
            selectedText = "everything selected (" + count + ") <br>";
        } else {
            selectedText = "custom selection (" + count + ") <br>";
        }

        $selectedList.append(wrapInDiv(selectedText));
});
