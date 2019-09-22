document.addEventListener("DOMContentLoaded", function(event) {
    changeImg()
    document.querySelector("#right-button").addEventListener("click", () => {
        i++
        changeImg()
    })
    
    document.querySelector("#left-button").addEventListener("click", () => {
        i--
        changeImg()
    })    
})


var i = 0;
var images = [];
images[0] = '../images/doggo1.jpg';
images[1] = '../images/doggo2.jpg';
images[2] = '../images/doggo3.jpg';
images[3] = '../images/doggo4.jpg';

function changeImg(){
    if(i < 0){
        i = images.length - 1
    }
    i = i % images.length
    console.log(i)
    document.slide.src = images[i];
}


