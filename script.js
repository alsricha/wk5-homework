//Loads HTML and CSS first before running JS
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));


//Assign event listener to save button

$(".saveBtn").click(function(){
    console.log(this) // "this" represents .saveBtn

    // ".siblings()" is  a selector that gets the children of each element in the set of matched elements. source: https://api.jquery.com/siblings/
    var text = $(this).siblings(".description").val();

    // ".parent()" is a selector that gets the parent of each element in the current set of matched elements. source: https://api.jquery.com/parent/#parent-selector

    var time = $(this).parent().attr("id");

    // Set Items to Local Storage
    localStorage.setItem(time, text);

})
















})