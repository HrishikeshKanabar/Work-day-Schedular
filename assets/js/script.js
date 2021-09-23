/*

Script name : script.js
Description:
- Helps to load and populate task 
- 

*/

//Intializing array of events
var events = [];

/*
##################################################################
Function name: loadsEvents
Description :
-Get the task stored in loocal storage
-Populate them to textarea as per id
##################################################################
*/

var loadsEvents = function () {
  //take the value from the local storage for each textarea

  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));
  $("#18").val(localStorage.getItem("18"));
  $("#19").val(localStorage.getItem("19"));
  $("#20").val(localStorage.getItem("20"));
  $("#21").val(localStorage.getItem("21"));
  $("#22").val(localStorage.getItem("22"));
};

/*
##################################################################
Event listener on click of "Lock icon" (Save) button
Description :
- Fetches the previous element.
- Gets time and task description.
- Calls method to save to local storage.
##################################################################
*/

$(".saveBtn").on("click", function (event) {
  // Just to prevent default click for butoon and icons
  event.preventDefault();

  /*
      1.) Fetching prevoius element before button that is textarea
      2.) Id of text area kept same as time  and value is whatever entered by use
  */
  var previousElement = $(this).prev()[0];
  var timeEvent = previousElement.id;
  var EventDescription = previousElement.value;

  //console.log(timeTask);
  //console.log(taskDescription);

  // Creating JSON object to store time in local storage
  eve = {
    eventid: timeEvent,
    eventdes: EventDescription,
  };

  //Validation task description is not empty
  if (EventDescription === "") {
    alert("You need to fill the description of task.");
  } else {
    //Adding the object to the array
    events.push(eve);

    //call function  store the tasks in local storage
    saveEventsInLocalStorage();
  }
});

/*
##################################################################
Function name: saveEventsInLocalStorage
Description :
-Stores event in localStorage
##################################################################
*/

var saveEventsInLocalStorage = function () {
  localStorage.setItem(eve.eventid, eve.eventdes);
};

/*
##################################################################
Function name: showCurrentDayDateTime
Description :
- To show current day date and time
- Using momemt api
##################################################################
*/

var CurrentDayDateTime = moment().format("dddd, MMMM Do");
var showCurrentDayDateTime = function () {
  //selector for show the date
  $("#currentDay").text(CurrentDayDateTime);
};

/*
##################################################################
Function name: colorForHours
Description :
- Change events color as per hours
##################################################################
*/

// Current hour with help of moment api
var currentTime = moment().hour();

var colorForHours = function () {
  $(".description").each(function () {
    var hourNumber = parseInt($(this).attr("id"));

    //condicional for change color in past, present and future depending the current hour
    if (hourNumber < currentTime) {
      $(this).addClass("past");
    } else if (hourNumber === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
};

// Calling the function to show colors as per hours
colorForHours();

// Calling the function to show current day date and time
showCurrentDayDateTime();

// Calling the function to load events on page loads
loadsEvents();
