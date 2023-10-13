let slide = document.querySelector(".slider-slide"); //Slider-slide is the image

let currentImageIndex = 0; //Setting currentImageIndex to 0

//Images is an array containing our different image sources.
let images = [
    "assets/Headerimage01.jpg",
    "assets/Headerimage02.jpg",
    "assets/Headerimage03.jpg"
];

// The function setActiveSlide takes an index as parameter 
const setActiveSlide = (index) => {
    slide.src = images[index]; //The image source is set to a new image source (depending on the index) from our array images
    slide.alt = "Product index " + index; //The image alt is set to "Product index " + the index
};

//Call to the function setActiveSlide with the parameter currentImageIndex (initial call)
setActiveSlide(currentImageIndex);

//Function next
const next = () => {
    //If our currentImageIndex is greater or equal images.length - 1 it will reset the currentImageIndex to 0
    if(currentImageIndex >= images.length - 1){
        currentImageIndex = 0;
    } else { //Else it will increment the currentImageIndex
        currentImageIndex++;
    }
    //Call to the function setActiveSlide with the new currentImageIndex.
    setActiveSlide(currentImageIndex);
}

//Interval on the function next, it will now be called every 2s.
setInterval(next, 7000);