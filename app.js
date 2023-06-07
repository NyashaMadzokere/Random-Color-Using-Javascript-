const colors = ["green", "red", "pink", "purple","grey","black","green"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomColor = getRandomColor();
   // const randomImage = 1;
    document.body.style.backgroundColor = colors[randomColor];
   // document.body.style.backgroundImage = colors[randomImage];
    color.textContent = colors[randomColor];
});

function getRandomColor(){
    return Math.floor (Math.random()*colors.length);
}