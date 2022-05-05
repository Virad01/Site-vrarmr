
// var typed = new Typed(c, {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
//   });
  

function prev(){
		document.getElementById('slider-container').scrollLeft -=270;
}

function next()
{
		document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
	$(this).toggleClass('zoomed');
	$(".overlay").toggleClass('active');
})

