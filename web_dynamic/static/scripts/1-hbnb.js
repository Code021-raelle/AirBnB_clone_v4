$(document).ready(function() {
    var checkedAmenities = {}

    $('input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if (this.checked) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            delete checkedAmenities[amenityId];
        }

        updateAmenitiesDisplay();
    });

    function updateAmenitiesDisplay() {
        var amenitiesDiv = $('div.amenities');
        var checkedAmenitiesList = Object.values(checkedAmenities).join(', ');

        amenitiesDiv.find('h4').text('Amenities: ' + checkedAmenitiesList);
    }
});
