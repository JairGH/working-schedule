$(document).ready(function () {
  var today = dayjs();
  $("#currentDate").text(today.format("MMM D, YYYY"));

  // im thinking off having this as the present and then make a if statement something like if (hourTime === hour time colorbackground.present)
  // var hourTime = dayjs().format("h A");
  // $("p").text(hourTime);

  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(description);
    console.log(time);

    localStorage.setItem(time, description);
  });
});

$("#hour-10 .description").val(localStorage.getItem("hour-10"));

$(".time-block").each(function () {
  var now = dayjs().format("HH");
  console.log($(this).attr("id").split("-"));
  var calenderHour = parseInt($(this).attr("id").split("-")[1]);
  if (now > calenderHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if (now == calenderHour) {
    $(this).addClass("present");
    $(this).removeClass("future");
    $(this).removeClass("past");
  } else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
  }
  console.log(now);
});

// var hourTime = dayjs();
// $("hour-11").text(hourTime.format("h"));
var hourCounter = 3;
for (let i = 5; i < 18; i++) {
  var currentTimeBlock = `
  <div id="hour-${i}" class="row time-block future">
        <div class="col-2 col-md-1 hour text-center py-3">${hourCounter}PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" id="saveBtn">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
  `;
  $(".container-lg").append(currentTimeBlock);
  hourCounter++;
}

$("#hour-15 .description").val(localStorage.getItem("hour-15"));
