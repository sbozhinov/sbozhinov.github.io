$(document).ready(function() {
  $('.gallery').lightGallery({
       thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
}); 
    
    
    var limit = 3;
var randNum = Math.floor(Math.random() * limit);

console.log(randNum);
});