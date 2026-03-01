function switchOn() {
    const light = document.getElementById('light');
    const status = document.getElementById('status');
    const screen = document.getElementById('screen');
    

    if (status.checked) {
        light.style.boxShadow =  "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #ae0f0f 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
        screen.style.backgroundColor = "rgba(128, 128, 128)";
        document.getElementById('content').style.display = "block";
        instance.reset();
    } else {
        screen.style.backgroundColor = "rgba(38, 38, 38, 0.9";
        document.getElementById('content').style.display = "none";
        light.style.boxShadow = "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
    }
    
}
window.onload = document.getElementById('content').style.display = "none";

new TypeIt("#myElement", {
        strings: "Terminal Start",
      }).go();