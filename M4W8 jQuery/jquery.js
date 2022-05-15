

const newName = "Steve"

// const boxOne = document.getElementsByClassName('box-one')[0];
// const results = document.querySelector('.results');

// const boxOne = $('.box-one');

// Target 
// Add event listener
// Effect


$(document).ready(function () {

  $('.box-one').on('click', function() {
    console.log("Fire")
    $('.results').append('<p>Hello this is for sure gonna work</p>');
    $('.box-one').css("background-color", "green")
  })

  // $('.box-two').on('click', function() {
  //   $('.box-one').slideUp(10000)
  // })

  // $('.box-three').on('click', function () {
  //   $('.box-one').slideDown(10000)
  // })

  $('.name-form').on('submit', function(event) {
    event.preventDefault()
    const $input = $('.name-input').val()
    const $input2 = $(this).find('input').val()
    let $results = $('.name-container h1')
    console.log($input2)
    $results.text($input2)
  })

  // $('.box-four').on('click', function() {
  //   $('body').css("background-color", "#3d1b15").css("color", "black")
  // })


  // $('.box-three').on('click', function () {
  //   $('body').css("background-color", "tomato").css("color", "white")
  // })


  // $('.box-four').on('click', function() {
  //   $('.box-four').removeClass("box-four").addClass("box-new")
  // })


  // $(document).on('click', ".box-new", function(){
  //   $('.box-new').css("background-color", "purple")
  // });

  $('.num-form').on('submit', function(event) {
    event.preventDefault()
    const $results = Number($('.num-container h1').text())
    const $numValue = Number($('.num-input').val())
    console.log($numValue, $results)

    $('.num-input').val(123455555)
    
    $('.num-container h1').text($results + $numValue)
    
    if($numValue > 1000) {
      $('.box-one').css("color", "red")
    } else {
      $('.box-one').css("color", "white")
    }

  })

})