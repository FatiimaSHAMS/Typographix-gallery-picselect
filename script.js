//Loading Animation
//Function to generate a random color 
function getRandomColor(){
  return '#' +Math.random().toString(16).slice(-6);
}

// Function to set random colors to the squares 
function setRandomColors(){
  document.querySelector('.color1').style.backgroundColor= getRandomColor();
  document.querySelector('.color2').style.backgroundColor= getRandomColor();
  document.querySelector('.color3').style.backgroundColor= getRandomColor();
}

// Initialize with random colors
setRandomColors();

// Continue to change colors every 2 seconds
setInterval(setRandomColors, 2000);

//Show loader for 3 seconds, then show content;
setTimeout(() => {
  document.querySelector('.loader-container').style.display='none';
  document.querySelectorAll('.item').forEach(el => el.style.opacity='1');
},3000);


// Allow for selection of image to trigger modal view 
const items = document.querySelectorAll('.item');

items.forEach(item=> {
  item.title= 'Click to Enlarge';
  item.addEventListener('click', ()=> {
    const imgSrc=item.querySelector('img').src;
    // Create the modal div
    const modal=document.createElement('div');
    modal.classList.add('modal');
    // Create the img element
    const imgElement =document.createElement ('img');
    imgElement.src=imgSrc;
    imgElement.alt= 'Enlarged Abstract Image'
    // Append the image element to the modal div
    modal.appendChild(imgElement);
    // Add the modal to the body
    document.body.appendChild(modal);
    setTimeout(() => {
      imgElement.classList.add('reveal');
    },10);
    //Remove the modal when it's clicked
    modal.addEventListener('click', () => {
      imgElement.classList.remove('reveal');
      setTimeout(() =>{
        modal.remove();
      },300); 
    });
  });
});


// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
    const navbar=document.getElementById("navbar");
    const logo=document.getElementById ("logo");
    let scrollPosition= window.scrollY;

    //Add/remove 'scrolled' class based on scroll position
    if(scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    //Calculate new font size based on scroll position
    let newSize= 3 - (scrollPosition * 0.03);// Decrease by 0.03 rem for every 1px scrolled 
 
    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3,newSize);

    logo.style.fontSize = newSize + "rem";
}

// Event Listener for scroll event 
window.addEventListener('scroll', checkScroll);