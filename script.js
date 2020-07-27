//Loads HTML and CSS first before running JS
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));


//Assign event listener to save button

$(".saveBtn").click(function(event){
    console.log(this) // "this" represents .saveBtn

    // ".siblings()" is  a selector that gets the children of each element in the set of matched elements. source: https://api.jquery.com/siblings/

    var text = $(this).siblings(".description").val();

    // ".parent()" is a selector that gets the parent of each element in the current set of matched elements. source: https://api.jquery.com/parent/#parent-selector

    var time = $(this).parent().attr("id");

    // Set Items to Local Storage

    localStorage.setItem(time, tex);

})

// Load saved data from Local Storage for each hour created

$("#hour9.description").val(localStorage.getItem("hour9"));
$("#hour10.description").val(localStorage.getItem("hour10"));
$("#hour11.description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14.description").val(localStorage.getItem("hour14"));
$("#hour15.description").val(localStorage.getItem("hour15"));
$("#hour16.description").val(localStorage.getItem("hour16"));
$("#hour17.description").val(localStorage.getItem("hour17"));


function hourTracker(){
    var currentHour = moment().hour();

    //Loop through time blocks

    $(".time-block").each(function(){
        var blockHour = parseInt ($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }

        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
hourTracker();

})