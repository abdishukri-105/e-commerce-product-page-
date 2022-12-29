// Open the Modal
console.log("shukri")
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }



//   counter 

//variables
const add = document.querySelector("#add")
const subtract = document.getElementById('subtract')
let output = document.querySelector("#output")
let quantity =  document.querySelector("#quantity")
let total = document.querySelector("#total")
const cart = document.querySelector("#cart")
console.log(add, subtract)


// add eventlistener

add.addEventListener('click', (e) => {
    e.preventDefault()
    let result = Number(output.innerText) + 1
    
    output.innerText = result
    calculateAmount()
})

subtract.addEventListener('click', (e) =>{
    e.preventDefault()
    let result = Number(output.innerText) - 1
     
    if (result < 0){
        result = 0
    }
    output.innerText = result
})

cart.addEventListener('click', (e)  => {
    e.preventDefault()
    output.innerText = 0
    const notification =  document.getElementById("notification")
    console.log(notification)
    notification.classList.add( "translate-middle", "bg-danger", "border", "border-light", "rounded-circle")
    notification.innerText = "new"
})

const  calculateAmount = () => {
    let amount = Number(quantity.innerText) + 1

    quantity.innerText = amount
   
     
     let price = document.querySelector("#price")
     price = 125.00
     let totalAmount = price * amount

     total.innerText = totalAmount

}