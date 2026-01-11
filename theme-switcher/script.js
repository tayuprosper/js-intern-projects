
const divs = document.getElementById('divs');
const body = document.getElementById('body');
const content = document.getElementById('content');
const buttons = document.getElementById('buttons');

const options = document.querySelectorAll('input[name="mode"]');

const blocks = document.querySelectorAll('[id="dark"]'); 
const block_for_border = document.querySelectorAll('[id="title"]');

options.forEach(option => {
  option.addEventListener('change', () => {
    if(option.checked) {
      switch(option.id) {
        case 'lightMode':
          console.log("Light Mode selected");
          enableLightMode();
          break;
        case 'darkMode':
          console.log("Dark Mode selected");
          enableDarkMode();
          break;
        case 'blueMode':
          console.log("Blue Mode selected");
          enableBlueMode();
          break;
      }
    }
  });
});

function enableLightMode() {
  body.className = ''
  blocks.forEach(el => {
  el.className = '';          
  el.classList.add('logo');
});

block_for_border.forEach(bl =>{
  bl.className = '';
  bl.classList.add("title")
})

 }
function enableDarkMode() { 
  body.classList.add("darkmode")
  body.classList.remove("bluemode")

  blocks.forEach(el => {
  el.className = '';           
  el.classList.add('logo-dark'); 
});

block_for_border.forEach(bl =>{
  bl.className = '';
  bl.classList.add("title-dark")
})

}
function enableBlueMode() {
  body.classList.add("bluemode")
  body.classList.remove("darkmode")
  blocks.forEach(el => {
  el.className = '';          
  el.classList.add('logo-dark'); 
});
block_for_border.forEach(bl =>{
  bl.className = '';
  bl.classList.add("title-dark")
})
 }
