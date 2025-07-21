window.addEventListener("DOMContentLoaded", () => {
    const scrolltopetbtn = document.getElementById("scrolltopets");
    const petselectionsection = document.getElementById("pet-selection");
    const petoptions =document.querySelectorAll(".pet-option");    //querySelectorAll is for selecting multiple elements that share a common class or selector  and getElementById('some-id') only works when the element has a unique ID — and IDs must not be repeated in an HTML document.
    const petimg = document.getElementById("pet-img");
    const petname = document.getElementById("pet-name");
    const maingamesection = document.getElementById("maingame");
    const eatbtn = document.getElementById("eat-btn");
    const sleepbtn = document.getElementById("sleep-btn");
    const bathbtn = document.getElementById("bath-btn");
    const playbtn = document.getElementById("play-btn");
    const exercisebtn = document.getElementById("exercise-btn");

    const happinessbar = document.getElementById("happiness-bar");
    const energybar = document.getElementById("energy-bar");
    const hungerbar = document.getElementById("hunger-bar");
    const happinesspercent = document.getElementById("happiness-percent");
    const energypercent = document.getElementById("energy-percent");
    const hungerpercent = document.getElementById("hunger-percent");
   
    let happiness =60;
    let energy =80;
    let hunger = 50;

    scrolltopetbtn.addEventListener("click", () => {
        petselectionsection.scrollIntoView({ behavior: "smooth" });     //scrollIntoView() is a JavaScript method that scrolls the browser automatically to bring an element into the visible area of the screen
    });

    petoptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedpet = option.getAttribute("data-pet");
            const petsrc = option.querySelector("img").src;
            const petlabel =option.querySelector("button").innerText;

            petimg.src = petsrc;
            petname.innertext = petlabel;
            maingamesection.scrollIntoView({behavior: "smooth"});
        });
    });

    

})