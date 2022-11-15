// Coming up with a date to use for the website.
var current_day = $("#current_day")
var today = dayjs().format("dddd, MMMM DD, h:mma");
current_day.text(today)
// Creating id's that can tap into the boxes
var box1 = $("#hour-9")
var box2 = $("#hour-10")
var box3 = $("#hour-11")
var box4 = $("#hour-12")
var box5 = $("#hour-13")
var box6 = $("#hour-14")
var box7 = $("#hour-15")
var box8 = $("#hour-16")
var box9 = $("#hour-17")

let work_day = [box1, box2, box3, box4, box5, box6, box7, box8, box9]



$(".saveBtn").on("click", function(){
  localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val())
  
})


// created a real live hour for web use.
const current_hour = dayjs().format("H");
for (var i = 9; i < 18; i++){
  // created a current tense to change the the classes for boxes; makes them change colors
  let current_tense;
  if(current_hour == i){
    current_tense = "present";
    // added an array to help speed up what needed to be in the html 
    work_day[i-9].addClass(current_tense);
  } else if (current_hour > i){
    current_tense = "future";
    work_day[i-9].addClass(current_tense);
  } else {
    current_tense = "past";
    work_day[i-9].addClass(current_tense)
  }
}

// invented for loop to get hold of keys and values on website load up.
for (let i=9; i<18; i++){
  $(`#${i}`).val(localStorage.getItem(`hour-${i}`))
}





  