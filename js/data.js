
//Places Data
var placesData = [
    {
        name:         'Sahara Ganj',
        category:     'Mall',
        description:  'Lucknow first mall and highly luxurious',
        location:     { lat: 26.855497, lng: 80.946366}
        
    },
    {
        name:         'Zero Degree',
        category:     'Bar / Club',
        description:  'Chillout House. Beautiful People. Great location',
        location:     { lat: 26.853022, lng: 80.973469 }
    },
    {
        name:         'Kalika',
        category:     'Restaurant',
        description:  'Small, hidden and inconspicuous. The best and most ' +
                      'authentic indian food in the region.',                           
        location:     { lat: 26.858019, lng: 80.991286 }  
    },
    {
        name:         "Aryans",
        category:     'Restaurant',
        description:  'It offers the best Punjabi and Hyderabadi food in town.',
        location:     { lat: 26.843949, lng: 80.947093 }
    },
    {
        name:         'Imambada',
        category:     'Castle',
        description:  'Up up, the hill you discover this majestic castle.',
        location:     { lat: 26.868601, lng: 80.912645 }
    },

    {
        name:         'Cafe Coffee Day',
        category:     'Café / Bar',
        description:  'Wonderful café which turns to a bar at night. ',
        location:     { lat: 26.882810, lng: 80.945472 }
    },
    {
        name:         "Fun Republic",
        category:     'Mall',
        description:  'It is the biggest mall of Lucknow',
        location:     { lat: 26.858225, lng:80.976326 }
    },
    ];
// Map Data
var mapDiv = document.getElementById('map');
var mapOptions = {
    center: {lat: 26.846694, lng: 80.946166},
    zoom: 16,
    styles: mapStyles,
    mapTypeControl: false
};
// set up map styles
var mapStyles = [
    {
        "featureType":"landscape",
        "stylers":
            [
                {"hue":"#FFBB00"},
                {"saturation":43.400000000000006},
                {"lightness":37.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.highway",
        "stylers":
            [
                {"hue":"#FFC200"},
                {"saturation":-61.8},
                {"lightness":45.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.arterial",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":51.19999999999999},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.local",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":52},
                {"gamma":1}
            ]
    },
    {
        "featureType":"water",
        "stylers":
            [
                {"hue":"#0078FF"},
                {"saturation":-13.200000000000003},
                {"lightness":2.4000000000000057},
                {"gamma":1}
            ]
    },
    {
        "featureType":"poi",
        "stylers":
            [
                {"hue":"#00FF6A"},
                {"saturation":-1.0989010989011234},
                {"lightness":11.200000000000017},
                {"gamma":1}
            ]
    }
];

// Foursquare Data
var foursquareClientID = '30MHFZETLY40UTVUNCGBO3A1OTQIWIHOQU3P4B3SDIVB21C5',
    foursquareClientSecret = 'XYVQVJ1VCDRZB5YG0FYGZFYOSCRKESKZLFM10US5DTNRAXCX';