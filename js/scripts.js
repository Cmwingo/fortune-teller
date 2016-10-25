$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var checkboxName = "";
    var luckyEvents = getCheckboxInput("lucky-events");
    var unluckyEvents = getCheckboxInput("unlucky-events");
    
    tellFortune(luckyEvents.length, unluckyEvents.length);
  });
});

function getCheckboxInput(checkboxName){

  var inputs = [];

  $("input:checkbox[name=" + checkboxName + "]:checked").each(function(){
    var selection = $(this).val();
    inputs.push(selection);
  });
  return inputs;
};

function tellFortune(luckyNumber, unluckyNumber) {

  if(luckyNumber > 4 && unluckyNumber < 3){
    $("#fortune p").text("You are an extremely lucky person. I see nothing but good things in your future. Go play the lottery today!");
  } else if (luckyNumber < 3 && unluckyNumber >= 4){
    $("#fortune p").text("You are an extremely unlucky person. I see doom and gloom in your future. Go hide somewhere until your luck changes!");
  } else if (luckyNumber < 4 && unluckyNumber > 3){
    $("#fortune p").text("You are in state of luck fluxuation. I cannot see what lies ahead for you. Be careful of the next move you take.");
  } else {
    $("#fortune p").text("Chaos swirls around you. My crystal ball can't get any good reading for your future. Please try again later.");
  }

}
