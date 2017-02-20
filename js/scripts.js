$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var sent = $("#sentence").val();
    var sentArray = sent.split(" ");
    var newArray = [];
    sentArray.forEach(function(word){
      if (word.length > 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    reverseSent = newArray.join(" ");

    $(".output").append("<p>"+reverseSent+"</p>");
  });


});
