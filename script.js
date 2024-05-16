// CURSOR
const cursor = document.querySelector(".cursor");
let timeout;

// follow cursor on move
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // cursor effects on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
})

// cursor effects on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});


// THEME COLORS
document.querySelector('.box').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

document.onclick = function(){
    document.querySelector('.color-switcher').classList.toggle('active');

}

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
});

// SEND BUTTON
let icon = document.getElementById('send');
icon.onclick = function(){
    alert(`THANK YOU`)
}

function send() {
    const name =
    document.getElementById('name').value;
    alert(`Thank you, ${name}!`)
}