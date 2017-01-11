// var colorArray = ['pink','purple','goldenrod','blue','green','red'];
$(function(){
var bangColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  $('#bigBang').css('background-color', bangColor);
  $('h1').css('background-color', bangColor);
  $('body').css('background-color', bangColor);

  $('#bigBang').on('click', function(){
    $('#plasma').append('<div class="box"><button class = "delete">X</button></button></div>');
    var color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    $('.box:last').css('background-color', color);
    // colorArray[randomNumber(1,6)]);
    $('#bigBang').css('background-color', color);
    $('h1').css('background-color', color);
  })
    // $('.box:last').css('background-color', bGColor);


  $('#plasma').on('click', '.box', function(){
    $(this).css('background-color', 'black');
  })
  $('#plasma').on('click', '.delete', function(){
    $(this).closest('.box').remove();
    var color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    $('#bigBang').css('background-color', color);
    $('h1').css('background-color', color);
    $('body').css('background-color', color);

  })
})





function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
