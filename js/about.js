const question1 = document.getElementById("question1");
const answer1 = document.getElementById("answer1");

question1.addEventListener("click",()=>{
    answer1.classList.toggle("hidden");
});

const question2 = document.getElementById("question2");
const answer2 = document.getElementById("answer2");

question2.addEventListener("click",()=>{
    answer2.classList.toggle("hidden");
});

const question3 = document.getElementById("question3");
const answer3 = document.getElementById("answer3");

question3.addEventListener("click",()=>{
    answer3.classList.toggle("hidden");
});

const question4 = document.getElementById("question4");
const answer4 = document.getElementById("answer4");

question4.addEventListener("click",()=>{
    answer4.classList.toggle("hidden");
});

const question5 = document.getElementById("question5");
const answer5 = document.getElementById("answer5");

question5.addEventListener("click",()=>{
    answer5.classList.toggle("hidden");
});



let slidemove = document.getElementById("slidemove");
let i = 0;

    setInterval(() => {
        i += 100;
        slidemove.style.right = i + "%";
        if(i > 300){
            i = -100;
        }
    }, 2000);
