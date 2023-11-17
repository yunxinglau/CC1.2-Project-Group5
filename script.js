
"use strict"

var currentImage = 0;
var container = document.getElementById('slide-container')
const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', function(event) {
  event.preventDefault();
  currentImage++;

  if (currentImage > myphotos.length - 1) {
    currentImage = 0;
  }

  swapImage();

})


prevBtn.addEventListener('click', function(event) {
  event.preventDefault();
  currentImage--;

  if (currentImage < 0) {
    currentImage = myphotos.length - 1;
  }

  swapImage();
})



setInterval(function() {

  currentImage++;

  if (currentImage > myphotos.length - 1) {
    currentImage = 0;
  }
  swapImage();

}, 8000);

function swapImage() {

  var newSlide = document.createElement('img');
  newSlide.src = "slides/" + myphotos[currentImage];
  newSlide.className = "fadeinimg";
  container.appendChild(newSlide);

  console.log(container.children.length);
  if (container.children.length >= 2) {
    container.removeChild(container.children[0]);
  }

}

var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var btn5 = document.getElementById('button5');
var btn6 = document.getElementById('button6');

var buttonArray = [btn1, btn2, btn3, btn4, btn5, btn6];
var pressedButton = buttonArray[0];

var par1 = "The sauce was first produced in the 1940s by a Thai woman named Thanom Chakkapak in the town of Si Racha (or Sriracha), Thailand.";
var par2 = "Sriracha is typically made of: Chiles, Sugar, Salt, Garlic, Distilled vinegar, Potassium sorbate, Sodium bisulfite , Xanthan gum";
var par3 = "What is Sriracha good for in the kitchen? Just about everything! If you’re just getting to know it as a condiment, think of it like a fiery, chili-pepper-based ketchup. To mellow out the heat, try mixing it with a bit of mayonnaise and use it as a spread for sandwiches, or a dipping sauce for fast-food fries. Sriracha is an Asian condiment, but it plays nicely with umami-rich food from all over the world. As an ingredient, you can stir small amounts into soups, stews and sauces to add gentle notes of garlic and chilis, without worrying about adding too much spiciness. It’s a staple with Vietnamese pho! Sriracha also works very well in marinades for meat, fish, tofu and vegetables. You can even use sriracha in desserts; try eating it with peanut brittle!";
var par4 = "Does sriracha need to be refrigerated? Because it’s so full of natural and added preservatives, sriracha does not need to be refrigerated. The capsaicin in chili peppers (the compound that makes them spicy!) and vinegar are both natural preserving agents that are hostile to bacteria and other unpleasant microbes. As long as sriracha is stored in a cool, dry place, it will be perfectly safe to eat.";
var par5 = "Is sriracha vegan? Yes! If you’re vegan or thinking of becoming vegan, you can still enjoy sriracha, as it does not contain any animal byproducts.";
var par6 = "Various restaurants in the US, including Wendy's, Applebee's, P.F. Chang's, Jack in the Box, McDonald's, Subway, Taco Bell, White Castle, Gordon Biersch, Chick-fil-A, Firehouse Subs, Noodles & Company, Starbucks, and Burger King have incorporated sriracha into their dishes, sometimes mixing it with mayonnaise or into dipping sauces. Blue Diamond, a leading producer of almond products, markets a sriracha flavor alongside their other flavors";

var paragraphArray = [par1, par2, par3, par4, par5, par6];



function generateFacts(text) {

  var myTag = document.createElement('p');
  var myText = document.createTextNode(text);
  myTag.style.fontFamily = 'comic sans ms';
  myTag.style.fontSize = "40px";
  myTag.className = "facts2";
  myTag.appendChild(myText);
  var myDiv = document.getElementById('facts-container');
  myDiv.appendChild(myTag);
  myDiv.removeChild(myDiv.children[0]);
};


function buttonColorChange(newButton) {
  pressedButton.className = "round"
  pressedButton = newButton;
  newButton.className = "pressed";
}


buttonArray[0].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[0]);
  generateFacts(paragraphArray[0]);
});

buttonArray[1].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[1]);
  generateFacts(paragraphArray[1]);
});

buttonArray[2].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[2]);
  generateFacts(paragraphArray[2]);
});


buttonArray[3].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[3]);
  generateFacts(paragraphArray[3]);
});


buttonArray[4].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[4]);
  generateFacts(paragraphArray[4]);
});

buttonArray[5].addEventListener('click', function(event) {
  buttonColorChange(buttonArray[5]);
  generateFacts(paragraphArray[5]);
});


















