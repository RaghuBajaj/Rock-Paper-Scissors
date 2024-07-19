const userScore= document.querySelector(".user-score");
const compScore= document.querySelector(".comp-score");
// userScore=0;
// compScore=0;

const options = ["rock" , "paper" , "scissors"];

const select = document.getElementsByClassName("icon");
console.log(select);

select.addEventListener('click', function(e){
    const id=e.target.id;
    console.log(e.targets);
    return id;
});



function getRandomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const comp = getRandomElement(options);




// select.addEventListener('click', function(id){
// })
