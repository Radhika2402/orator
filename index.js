$(document).ready(function(){
    $("#about").hide();
    $("#btn").hide();
    $("#speak").hide();
  });
$("#dance").click(function(){
    $("#drp").text("Dance");
    $("img").attr("src","dance.gif");
    $("#btn").hide();
    var audio= new Audio('danceaudio.mp3');
    audio.play();
})
$("#msc").click(function(){
    $("#drp").text("Music");
    $("img").attr("src","music.gif");
    $("#btn").hide();
    var audio1= new Audio('musicaudio.mp3');
    audio1.play();
})
$("#spk").click(function(){
    $("#drp").text("Speak");
    $("img").attr("src","speak.gif");
    $("#btn").show();
    $("#speak").show();
})
$("#ab").click(function(){
    $("#about").show();
})
$("#speak").click(function(){
    var msg = new SpeechSynthesisUtterance();
    msg.text = $("btn").text();
    window.speechSynthesis.speak(msg);
})