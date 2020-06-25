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

    function timeHighlight() {
        // grab the current time by hour with moment
        var currentTime = moment().hour();
        console.log(currentTime);

        // iterate through each time block
        $('.time-block').each(function() {
            // grab the hour from the ID -- parseInt first index after the '-'
            var blockTime = parseInt($(this).attr('id').split('-')[1]);
            console.log(blockTime);

            // conditional statement to change colors
            if (blockTime < currentTime) {
                // if block time is in the past
                $(this).addClass('past');
            } else if (blockTime === currentTime) {
                // if block time is the present hour
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                // if block time is in the future
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    // grab each time block-by time(parent) and textarea(child)- and add info stored in local storage
    // localStorage.getItem('keyname');
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // call back for time highlight function
    timeHighlight();

    // grab the current day of the week and the day and display on dom
    $('#currentDay').text(moment().format('dddd, MMM Do YYYY'));
});