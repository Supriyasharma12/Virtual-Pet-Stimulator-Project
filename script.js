window.addEventListener("DOMContentLoaded", () => {
    const scrolltopetbtn = document.getElementById("scrolltopets");
    const petselectionsection = document.getElementById("pet-selection");
    const petoptions = document.querySelectorAll(".pet-option");    //querySelectorAll is for selecting multiple elements that share a common class or selector  and getElementById('some-id') only works when the element has a unique ID — and IDs must not be repeated in an HTML document.
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

    let happiness = 60;
    let energy = 80;
    let hunger = 50;

    scrolltopetbtn.addEventListener("click", () => {
        petselectionsection.scrollIntoView({ behavior: "smooth" });     //scrollIntoView() is a JavaScript method that scrolls the browser automatically to bring an element into the visible area of the screen
    });

    petoptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedpet = option.getAttribute("data-pet");
            const petsrc = option.querySelector("img").src;
            const petlabel = option.querySelector("button").innerText;

            petimg.src = petsrc;
            petname.innertext = petlabel;
            maingamesection.scrollIntoView({ behavior: "smooth" });

        });
    });
     
    const moodImages = {
        kitty: {
            default: "/assets/kitty-hero-img.png",
            eating: "/assets/kitty-FOOD.png",
            sleeping: "/assets/kitty-SLEEP.png.png",
            bathing: "/assets/kitty-bath.png",
            playing: "/assets/kitty-playing.png",
            exercising: "/assets/kitty-exercise.png",
            happy: "/assets/kitty-happy.png",
            exhausted: "/assets/kitty-exhaust.png",
            crying: "/assets/kitty-CRYING.png",
            excited: "/assets/kitty-happy-full-energy.png",
            sad:"/assets/kitty-sad.png",
        },
        puffy: {
            default: "/assets/dog-hero-img.png",
            eating: "/assets/DOG-FOOD.png",
            sleeping: "/assets/dog-sleep.png",
            bathing: "/assets/dog-bath.png",
            playing: "/assets/dog-play.png",
            exercising: "/assets/puffy-exercise.png",
            happy: "/assets/dog-HAPPY.png",
            exhausted: "/assets/dog-exhaust.png",
            crying: "/assets/Dog-sad.png",
            excited:"/assets/dog-HAPPY-FULL-ENERGY",
            sad:"/assets/Dog-sad.png",
        }
    };
    
    function showmoodimg(mood){
        petimg.src =moodImages[selectedpet][mood];
        setTimeout(updatemoodimg,2000);
    }

    function updatemoodimg(){
        if (happiness >= 90 && energy >= 90) {
            petImg.src = moodImages[selectedPet].excited;
        } else if (happiness >= 70 && energy >= 70 && hunger >= 70) {
            petImg.src = moodImages[selectedPet].happy;
        } else if (happiness < 30 || energy < 30 || hunger < 30) {
            petImg.src = moodImages[selectedPet].crying;
        } else if (energy < 40) {
            petImg.src = moodImages[selectedPet].exhausted;
        } else if (happiness < 40) {
            petImg.src = moodImages[selectedPet].sad;
        } else {
            petImg.src = moodImages[selectedPet].default;
        }
    }

    function updatebar(value, bar, percentagelabel) {
        value = Math.max(0, Math.min(100, value));
        bar.style.width = value + "%";
        percentagelabel.textContent = value + "%";
    }

    function updateAll(){
        happiness = updatebar(happiness,happinessbar,happinesspercent);
        energy = updatebar(energy,energy,energypercent);
        hunger = updatebar(hunger,hungerbar,hungerpercent);
    }
     
    function updatepetimg(action){
        const pet = petname.innerText;
        if(pet === "kitty"){
            if(action==="eat") petimg.src="/assets/kitty-FOOD.png";
            else if(action === "sleep") petimg.src ="/assets/kitty-SLEEP.png";
            else if(action === "play") petimg.src ="/assets/kitty-HAPPY.png";
            else if(action === "bath") petimg.src ="/assets/kitty-bath.png";
            else if(action === "exercise") petimg.src ="/assets/kitty-exercise.png";
        }
        if(pet === "Puffy"){
            if(action==="eat") petimg.src="/assets/DOG-FOOD.png";
            else if(action === "sleep") petimg.src ="/assets/dog-sleep.png";
            else if(action === "play") petimg.src ="/assets/dog-play.png";
            else if(action === "bath") petimg.src ="/assets/dog-bath.png";
            else if(action === "exercise") petimg.src ="/assets/dog-exhaust.png";
        }
        resettodefaultimage();
    }


    //buttons
    eatbtn.addEventListener("click", () => {
        hunger += 15;
        energy -= 5;
        updadeAll();
    });

    sleepbtn.addEventListener("click", () => {
        energy += 20;
        happiness += 5;
        updateAll();
    });

    bathbtn.addEventListener("click", () => {
        happiness += 5;
        updateAll();
    });

    playbtn.addEventListener("click", () => {
        happiness += 10;
        hunger -= 10;
        energy -= 10;
        updateAll();
    });

    exercisebtn.addEventListener("click", () => {
        energy -= 15;
        happiness += 5;
        hunger += 10;
        updateAll();
    });
    

    setInterval(() => {
        happiness -= 2;
        energy -= 2;
        hunger += 2;
        updateAll();
    }, 1000);

});