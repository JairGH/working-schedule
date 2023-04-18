var today = dayjs();
$('#currentDate').text(today.format('MMM D, YYYY'));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(description);
    console.log(time);

    localStorage.setItem(time, description);
  })
});

$("#hour-10 .description").val(localStorage.getItem("hour-10"));

$(".time-block").each(function () {
  var now = dayjs().hour();
  var calenderHour = parseInt($(this).parent().attr("id").split("-")[1]);
  if (now < calenderHour) {
    $(this).addClass("past");
  } else if (now === calenderHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
})
