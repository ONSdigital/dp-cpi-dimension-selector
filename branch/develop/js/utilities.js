/**
 * Store functions that are used across multiple HTML files (remember to add this JS file to your HTML pages though)
 */

var utilities = {

    mapShortDateToFullDate: function(shortDate) {
        var dateArray = shortDate.split('-');

        switch (dateArray[0]) {
            case ("jan"): {
                dateArray[0] = "January";
                break;
            }
            case ("feb"): {
                dateArray[0] = "February";
                break;
            }
            case ("mar"): {
                dateArray[0] = "March";
                break;
            }
            case ("apr"): {
                dateArray[0] = "April";
                break;
            }
            case ("may"): {
                dateArray[0] = "May";
                break;
            }
            case ("jun"): {
                dateArray[0] = "June";
                break;
            }
            case ("jul"): {
                dateArray[0] = "July";
                break;
            }
            case ("aug"): {
                dateArray[0] = "August";
                break;
            }
            case ("sep"): {
                dateArray[0] = "September";
                break;
            }
            case ("oct"): {
                dateArray[0] = "October";
                break;
            }
            case ("nov"): {
                dateArray[0] = "November";
                break;
            }
            case ("dec"): {
                dateArray[0] = "December";
                break;
            }
            default: {
                console.log('Month not recognised');
                break;
            }
        }

        return dateArray.join(' ');

    }
};
