// switch on and off functions
    const light = document.getElementById('light');
    const status = document.getElementById('status');
    const screen = document.getElementById('screen');
    const petstatus = document.getElementById('pet');
    const textvisible = document.getElementById('typing');
function switchOn() {
    if (status.checked) {
        light.style.boxShadow =  "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #ae0f0f 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
        screen.style.backgroundColor = "rgba(128, 128, 128)";
        document.getElementById('content').style.display = "block";
        textvisible.style.display = "block";
        petstatus.style.display = "none";
        instance.reset();

    } else {
        screen.style.backgroundColor = "rgba(38, 38, 38, 0.9";
        document.getElementById('content').style.display = "none";
        light.style.boxShadow = "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
    }
    
}
window.onload = document.getElementById('content').style.display = "none";
// Display Pet (first function)

function displayPet() {  
    if (status.checked) {
        textvisible.style.display = "none";
        petstatus.style.display = "block";
    } 
}

// Typeit animations
const checkbox = document.getElementById("status");
const date = dayjs().format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
const ram = navigator.deviceMemory;

let instance = null; 

checkbox.addEventListener("change", function () {

  if (this.checked) {

    
    if (!instance) {
      instance = new TypeIt("#typing", {
        speed: 5,
        breakDelay: 10,
        cursor: true,
        lifeLike: true,
        cursorChar: "■"
      })
        .type("BW-886 (NC) 2026")
        .break() 
        .type(`${date}`)
        .break()
        .type("VERSION 1.x.0a")
        .break()
        .type("MEMORY CLOCK: 64MHZ")
        .break()
        .type("READY")
        .break()
        .type(" ")
        .break()
        .type("WHAT WOULD YOU LIKE TO DO?")
        .break()
        .type('<a href="javascript:displayPet();"> > VIEW DEMO PET</a>')
        .break()
        .type('<a href="#"> > PLACEHOLDER </a>')
        .go();
    }

  } else {
    if (instance) {
      instance.destroy();
      document.querySelector("#typing").innerHTML = "";
      instance = null;
    }
  }

});