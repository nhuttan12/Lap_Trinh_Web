const greeting=["Hello", "Good Morning", "Konnichiwa", "Konbanwa"];
function random_greeing(){
    return greeting[Math.floor(Math.random()*greeting.length)];
}
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#random').textContent=random_greeing();
})