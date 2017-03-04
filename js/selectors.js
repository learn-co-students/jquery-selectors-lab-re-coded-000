'use-strict';

function h1Selector(){
  return $('h1');
}

function liInOlSelector(){
  return $('ol li');
}

function linkSelector(){
  return $('#box4 a , .box5 a');
  // return $('#box4.box5 a'); also works like the line above
}

function imageSelector(){
  return $('img[alt="cat sleeping"]');
}

function checkboxInputSelector(){
  return $('input[type="checkbox"]');
}
