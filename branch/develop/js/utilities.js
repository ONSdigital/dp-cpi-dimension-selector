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

    },

    defaultState: {
        customisedDimensions: {
            time: false,
            aggregates: false
        },
        times: {
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
            },
            addRange: []
        },
        aggregates: [
            {
                title: "CPI (overall index)",
                selected: true
            },
            {
                title: "Food and non-alcoholic beverages",
                uid: "01",
                selected: true,
                children: [
                    {
                        title: "Food and non-alcoholic beverages",
                        uid: "01",
                        selected: false
                    },
                    {
                        title: "Food",
                        uid: "01.1",
                        selected: false
                    },
                    {
                        title: "Bread and cereals",
                        uid: "01.1.1",
                        selected: false
                    },
                    {
                        title: "Meat",
                        uid: "01.1.2",
                        selected: false
                    },
                    {
                        title: "Fish",
                        uid: "01.1.3",
                        selected: false
                    },
                    {
                        title: "Milk, cheese and eggs",
                        uid: "01.1.4",
                        selected: false
                    },
                    {
                        title: "Oils and fats",
                        uid: "01.1.5",
                        selected: false
                    },
                    {
                        title: "Fruit",
                        uid: "01.1.6",
                        selected: false
                    },
                    {
                        title: "Vegetables including potatoes and tubers",
                        uid: "01.1.7",
                        selected: false
                    },
                    {
                        title: "Sugar, jam, syrups, chocolate and confectionery",
                        uid: "01.1.8",
                        selected: false
                    },
                    {
                        title: "Food products, not elsewhere covered ",
                        uid: "01.1.9",
                        selected: false
                    },
                    {
                        title: "Non-alcoholic beverages",
                        uid: "01.2",
                        selected: false
                    },
                    {
                        title: "Coffee, tea and cocoa",
                        uid: "01.2.1",
                        selected: false
                    },
                    {
                        title: "Mineral waters, soft drinks and juices",
                        uid: "01.2.2",
                        selected: false
                    }
                ]
            },
            {
                title: "Alcoholic beverages and tobacco",
                uid: "02",
                selected: true
            },
            {
                title: "Clothing and footwear",
                uid: "03",
                selected: true
            },
            {
                title: "House, water, electricity, gas and other fuels",
                uid: "04",
                selected: true
            },
            {
                title: "Furniture, household equipment, maintenance",
                uid: "05",
                selected: true
            },
            {
                title: "Health",
                uid: "06",
                selected: true,
                children: [
                    {
                        title: "Medical products, appliances and equipment",
                        uid: "06.1",
                        selected: false
                    },
                    {
                        title: "Pharmaceutical products",
                        uid: "06.1.1",
                        selected: false
                    },
                    {
                        title: "Other medical and therapeutic equipment",
                        uid: "06.1.2/3",
                        selected: false
                    },
                    {
                        title: "Out-patient services",
                        uid: "06.2",
                        selected: false
                    },
                    {
                        title: "Medical services and paramedical services",
                        uid: "06.2.1/3",
                        selected: false
                    },
                    {
                        title: "Dental services",
                        uid: "06.2.2",
                        selected: false
                    },
                    {
                        title: "In-patient service",
                        uid: "06.3",
                        selected: false
                    },
                    {
                        title: "Medical and paramedic services",
                        uid: "06.3.0",
                        selected: false
                    }
                ]
            },
            {
                title: "Transport",
                uid: "07",
                selected: true
            },
            {
                title: "Communication",
                uid: "08",
                selected: true
            },
            {
                title: "Recreation and culture",
                uid: "09",
                selected: true
            },
            {
                title: "Education",
                uid: "10",
                selected: true
            },
            {
                title: "Restaurants and hotels",
                uid: "11",
                selected: true
            },
            {
                title: "Miscellaneous goods and services",
                uid: "12",
                selected: true
            }
        ],
        selectedAggregates: []
    }
};
