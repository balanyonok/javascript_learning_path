const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const altTexts = {"pic1.jpg":"Closeup of a human eye", "pic2.jpg":"Decorative stone", "pic3.jpg":"Flowers", "pic4.jpg":"Egyptian Gods", "pic5.jpg":"Butterfly"};
/* Looping through images */
for (let imageFilename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src',`images/${imageFilename}`);
  newImage.setAttribute('alt', altTexts[imageFilename]);
  
  console.log(imageFilename);
  thumbBar.appendChild(newImage);
};
const fullImage = document.querySelector(".displayed-img");
thumbBar.addEventListener ("click", (event) => {
  fullImage.setAttribute("src", event.target.getAttribute("src"))
  fullImage.setAttribute("alt", event.target.getAttribute("alt"))
});
/* Wiring up the Darken/Lighten button */
