// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       height: '+=150px',
//       width: '+=150px'
//     });
//   });
// });

$(document).ready(function(){

  $("#red").click(function(){
    $("h1,h2,h3,h4,h5,h6").toggleClass("red")
  });
  $("#blue").click(function(){
    $("h1,h2,h3,h4,h5,h6").toggleClass("blue")
  });
  $("#green").click(function(){
    $("h1,h2,h3,h4,h5,h6").toggleClass("green")
  });
  $("#yellow").click(function(){
    $("h1,h2,h3,h4,h5,h6").toggleClass("yellow")
  });
  $("#remove").click(function(){
    $("h1,h2,h3,h4,h5,h6").removeClass("yellow green blue red")
  });
  
});

