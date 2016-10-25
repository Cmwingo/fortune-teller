$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var luckyEvents = [];
    var unluckyEvents = [];

    $("input:checkbox[name=lucky-events]:checked").each(function(){
      var luckyEvent = $(this).val();
      luckyEvents.push(luckyEvent);
    });
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      var unluckyEvent = $(this).val();
      unluckyEvents.push(unluckyEvent);
    });
    
    console.log(unluckyEvents);
  });
});
