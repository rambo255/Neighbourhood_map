//View Model

var placesViewModel = function () {
    var self = this;

        // add allPlaces property to connect to placesData
        self.allPlaces = ko.observableArray( [] );

        // add searchBox property to track SearchBoxInput
        self.searchBox = ko.observable('');

        // set infoWindow property as template
        self.infoWindow = new google.maps.InfoWindow({
            maxWidth: 200
        });

        // set bounds
        self.bounds = new google.maps.LatLngBounds();

    // connect to placesData (two way binding)
	
        // loop through placesData array
        placesData.forEach(function (placesDataItem) {
            // create a place object for each placesDataItem
            var place = new Place(placesDataItem);
            // push place object to allPlaces observableArray
            self.allPlaces.push(place);
            // adjust boundaries for each place and its marker
            self.bounds.extend(place.marker.position);
        });

        // add event listener to clear mapView and showAllPlaces
        google.maps.event.addListener(map, 'click', function(event) {
            clearMapView();
            showAllPlace();
        });

        // add  event listener to infoWindow closeclick to deactivateMarkers and showAllPlaces
        google.maps.event.addListener(self.infoWindow, 'closeclick',function(){
            deactivateMarkers();
            showAllPlace();
        });

        // tell map to adjust boundaries so that every marker fits in
        map.fitBounds(self.bounds);

        // adjust listView & mapView according to reset function on searchBox
        self.resetSearchBox = function () {
            // reset searchBox in listView
            self.searchBox('');
            // clear any open infoWindows and markers in appView
            clearMapView();
            showAllPlace();
        };

        // adjust listView and mapView according to searchBoxInput & click on marker respectively
        self.filteredPlaces = ko.computed( function () {
            // grab SearchBoxInput
            var searchBoxInput = self.searchBox().toLowerCase();

            // if SearchBoxInput exists render markers of filteredPlaces accordingly
            if (searchBoxInput !== null) {
                // filter allPlaces by name & category according to searchBoxInput
                return ko.utils.arrayFilter(self.allPlaces(), function(place) {

                    // render matches
                	if ( place.title().toLowerCase().indexOf(searchBoxInput) >= 0 ) {
                        // show place on map / show marker
                        place.marker.setVisible(true);

                        // add onlick functionality for each visibile place / marker
                        place.marker.addListener('click', function () {
                            activateMarker(place)();
                        });
                        // extend boundaries of map for each place / marker
                        self.bounds.extend(place.location);

                        return true;
                    }

                    // hide non-matches
                    else {
                        place.marker.setVisible(false);
                        clearMapView();

                        return false;
                    }
    	        });
            }
            // if SearchBoxInput does not exist return array of allPlaces
            else {
                return self.allPlaces();
            }
        });

        // adjust mapView according to click on placeItem in listView
        self.goToPlace = function (clickedPlace) {
            // activate marker according to clickedPlace
            activateMarker(clickedPlace)();
        };

    // add helper functions

        // activate marker
        function activateMarker (clickedPlace) {
        	return function() {
                // reset mapView
        		clearMapView();

                // update infoWindow content
        	    updateInfoWindow(clickedPlace);

                // change icon of marker to activated
                clickedPlace.marker.setIcon('img/activatedMarker.png');

                // zoom to marker
                map.setZoom(18);
                map.setCenter(clickedPlace.marker.getPosition());

                // open respective infoWindow
        		self.infoWindow.open(map, clickedPlace.marker);
        	};
        }
        // deactivate markers
        function deactivateMarkers () {
            self.allPlaces().forEach(function (place) {
                place.marker.setIcon('img/defaultMarker.png');
            });
        }

        // update infoWindow
        function updateInfoWindow (clickedPlace) {
            var successHtml = '<div id="o-infoWindow">' +
                                            '<h4 class="c-infoWindow__title">' + clickedPlace.name + '</h4>' +
                                            '<span class="c-infoWindow__category">' + clickedPlace.category + '</span>' +
                                            '<p class="c-infoWindow__description">' + clickedPlace.description + '</p>' +
                                        '</div>';

            // add loading info
            self.infoWindow.setContent(successHtml);
        }

        // clearMapView
        function clearMapView () {
            // close any opened infoWindows
            self.infoWindow.close();
            // change icon of any markers to default
            deactivateMarkers();
        }

        // show allPlaces
        function showAllPlace () {
            map.setZoom(15);
            map.fitBounds(self.bounds);
        }


};
