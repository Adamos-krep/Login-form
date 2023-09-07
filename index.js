const circles = document.querySelectorAll(".glowingCircles");

function moveCircles(circle){
    const maxX = window.innerWidth - circle.clientWidth;
    const maxY = window.innerHeight - circle.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;

    setTimeout(() => {
        moveCircles(circle);
    }, Math.random() * 6000);
}

circles.forEach((circle) => {
    moveCircles(circle);
});

const visible = document.getElementById("visible");
const noneVisible = document.getElementById("visible-off");
const PasswordInput = document.getElementById("password");
const showbutton = document.getElementById("showbutton");

showbutton.addEventListener("click", ()=>{
    if (PasswordInput.type === "password") {
        visible.style.display = "block";
        noneVisible.style.display = "none";
        PasswordInput.type = "text";
    } else {
        noneVisible.style.display = "block";
        visible.style.display = "none";
        PasswordInput.type = "password";
    }
});

const Demo = document.getElementById("case-password-is-big-orsmall");
PasswordInput.oninput = function(){
    console.log(PasswordInput.value.length)
    if(PasswordInput.value.length == "20" || PasswordInput.value.length <= "10"){
        Demo.style.display = "block";
    }else{
        Demo.style.display = "none";
    }
}

