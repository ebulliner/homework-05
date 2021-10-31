$(document).ready(function () {

    // Current Date Displayed
    var today = moment().format('LLLL');
    $("#currentDay").text(today);
  
    // Current Time Variable
    var curTime = moment().format('H');
  
    // Work Hours Array
    var workHours = [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ];
  
    // Create Time Blocks
    for (var i = 0; i < workHours.length; i++) {
      var timeBlock = moment().hours(workHours[i]).format('h A');
      $("#hour-block")
        .append(
          `<div class="row hour" id="${workHours[i]}">
            <div class="col col-sm-1 time-block"> ${timeBlock} </div>
            <textarea class="col col-lg-9" id="notes"></textarea>
            <button class="col col-sm-2 btn btn-block far fa-calendar-check saveBtn btn-lg">  SAVE  </button>
          </div>`);
    }
    
    // Highlight Rows Based Current Time
    $(".hour").each(function () {
      var holdTime = parseInt($(this).attr("id"))
      curTime = parseInt(curTime);
      if (holdTime > curTime) {
        $(this).addClass("future");
      }
      else if (holdTime === curTime) {
        $(this).addClass("present");
      }
      else $(this).addClass("past");
    });
  
    
    $(".saveBtn").on("click", function(){
      var myNotes = $(this).siblings("#notes").val();
      var storeTime = $(this).parent().attr("id");
      console.log(myNotes);
      console.log(storeTime);
      localStorage.setItem(storeTime, myNotes);
    })
  
    for (var j = 0; j < workHours.length; j++) {
      var counter = j + 8;
    $("#" + counter).children("#notes").val(localStorage.getItem(counter));
    }
  
  });
