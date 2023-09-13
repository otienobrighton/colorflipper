const colors = ['green', 'blue', 'red', 'yellow', '#f15025', 'rgb(133,122,200)'];
const btn = document.getElementById('btn');
const color = document.getElementById('color');
//adding an event listerner to the button
btn.addEventListener('click', function(){
    //get a random number between 1-3 that will be used to change the bg of the document
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //changing the bg of the body to the new generated random color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent =colors[randomNumber];
})
//the function below gives generates the random number value
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}