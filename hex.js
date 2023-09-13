const hex = [ 0,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

//how do we work with the hex color (#then 6 digits that may contain letters)
btn.addEventListener('click', function(){
    //get the hex number
    let hexColor = '#';
    //here we do a for loop that loops over the hex numbers then gives the hex code for the background color
    for(let i = 0; i< 6; i++){
        hexColor += hex[getRandomNumber()];
    }
//the random generated numbers from the loop is used to bring the colors to the DOM
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
//We now setup the getRandomNumber function that generates the random numbers for the hex code
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
