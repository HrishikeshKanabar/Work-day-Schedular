/*

Script name : script.js
Description:
- Helps to load and populate task 
- 

*/

//Intializing array of task
var tasks = [];


/*
##################################################################
Function name: loadsTask
Description :
-Get the task stored in loocal storage
-Populate them to textarea as per id
##################################################################
*/

var loadsTask = function () {
  //take the value from the local storage for each textarea

  $("#9").val(localStorage.getItem("9"))
  $("#10").val(localStorage.getItem("10"))
  $("#11").val(localStorage.getItem("11"))
  $("#12").val(localStorage.getItem("12"))
  $("#13").val(localStorage.getItem("13"))
  $("#14").val(localStorage.getItem("14"))
  $("#15").val(localStorage.getItem("15"))
  $("#16").val(localStorage.getItem("16"))
  $("#17").val(localStorage.getItem("17"))
  $("#18").val(localStorage.getItem("18"))
  $("#19").val(localStorage.getItem("19"))
  $("#20").val(localStorage.getItem("20"))
  $("#21").val(localStorage.getItem("21"))
  $("#22").val(localStorage.getItem("22"))

}

/*
##################################################################
Event listener on click of "Lock icon" (Save) button
Description :
- Fetches the previous element.
- Gets time and task description.
- Calls method to save to local storage.
##################################################################
*/

$('.saveBtn').on('click', function (event) {

   // Just to prevent default click for butoon and icons
    event.preventDefault();
   
  /*
      1.) Fetching prevoius element before button that is textarea
      2.) Id of text area kept same as time  and value is whatever entered by use
  */
  var previousElement = $(this).prev()[0];
  var timeTask = previousElement.id;
  var taskDescription = previousElement.value;

  //console.log(timeTask);
  //console.log(taskDescription);

  // Creating JSON object to store time in local storage
  task = {
    tasksid: timeTask,
    tasksdes: taskDescription
  };

  //Validation task description is not empty
  if (taskDescription === ""){
    alert("You need to fill the description of task.")
  }else{
 
  //Adding the object to the array
  tasks.push(task);

 //call function  store the tasks in local storage
  saveTasksInLocalStorage();
  }

});

//save task in localStorage

var saveTasksInLocalStorage = function () {
  
    localStorage.setItem(task.tasksid, task.tasksdes);
}

// function for show the current date
var now = moment().format("dddd, MMMM Do");
var dateD = function () {
  //selector for show the date 
  $("#currentDay").text(now);
};



//taking the current hour
var currentTime = moment().hour();

// function change task color 
var colorHour = function () {

  $(".description").each(function () {
    var hourNumber = parseInt($(this).attr("id"));

    //condicional for change color in past, present and future depending the current hour
    if (hourNumber < currentTime) {
      $(this).addClass("past")
    }
    else if (hourNumber === currentTime) {
      $(this).addClass("present")
      $(this).removeClass("past")
    }
    else {
      $(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
    }

  })
}
// call function for change tasks color depending the hour of the day
colorHour();

// call  function for show the current date
dateD();

// Load task function called when page is get loaded
loadsTask();