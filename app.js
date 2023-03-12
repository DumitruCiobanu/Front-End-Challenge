const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function () {
    this.classList.add("pressed");

  setTimeout(() => {
      this.classList.remove("pressed");    
}, 3000); 
  }); 
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function () {
  this.classList.add("released");

  setTimeout(() => {
    this.classList.remove("released");
    }, 60000); 
}); 
}
