var text  = [ "game", "mobile", "web",];
var index = 0;

$("#changing-text").fadeTo( 1, 0 );

setInterval( function(){
    $( "#changing-text" ).stop().html( text[ index ] ).fadeTo( 500, 1, function(){
        index++;
        $( "#changing-text" ).delay( 400 ).fadeTo( 500, 0 );
        if ( index == 3 ) {
            index = 0;
        };
    } );
}, 1800 );

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}