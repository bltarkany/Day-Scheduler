// when the DOM is fully loaded start this
$(document).ready(function() {

    // create onclick event for the saveBtn
    $('.saveBtn').on('click', function() {
        // grab the sibling of the saveBtn because both are children of time-block div/class
        var value = $(this).siblings('.description').val();
        console.log(value);
        // grab the time slot it is in based on time-block ID
        var time = $(this).parent().attr('id');
        console.log(time);

        // print to local storage the time slot and the activity 
        // setItem(key, value)
        localStorage.setItem(time, value);
    });

});