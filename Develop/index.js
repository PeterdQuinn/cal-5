
// GLOBAL VARIABLES
// display current time/date in header
$("#currentDay").append(moment().format("LLLL"));

// set current date/time for reference in blocks
let currentTime = moment().hour();

let saveEntry = "";

// FUNCTIONS
// recall entries from local storage
$(".time-block").each(function() {
  let timeEntryId = $(this).find(".hour").attr("id");
  let timeDesc = localStorage.getItem(timeEntryId);
  $(this).find(".description").val(timeDesc);

  var refTime = $(this).find(".description").attr("data-hour");

  // for each description class, run this function to color-coordinate blocks
  if (refTime > currentTime) {
    $(this).find(".description").addClass("future");
  } else if (refTime == currentTime) {
    $(this).find(".description").addClass("present");
  } else if (refTime < currentTime) {
    $(this).find(".description").addClass("past");
  };
});


// save entry to local storage
$(".saveBtn").on("click", function() {
  // console.log("click");
  
  saveEntry = $(this)
    .siblings(".description")
    .val();
  // console.log(saveEntry);

  let timeEntry = $(this)
    .siblings(".hour")
    .attr("id");
    
  localStorage.setItem(timeEntry, saveEntry);
});





s