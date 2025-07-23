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

    let happiness = 50;
    let energy = 50;
    let hunger = 50;
    let selectedPet = "kitty";

    scrolltopetbtn.addEventListener("click", () => {
        petselectionsection.scrollIntoView({ behavior: "smooth" });     //scrollIntoView() is a JavaScript method that scrolls the browser automatically to bring an element into the visible area of the screen
    });

    petoptions.forEach(option => {
        option.addEventListener("click", () => {
            selectedPet = option.getAttribute("data-pet");
            const petsrc = option.querySelector("img").src;
            const petlabel = option.querySelector("button").innerText;

            petimg.src = petsrc;
            petname.innerText = petlabel;
            maingamesection.scrollIntoView({ behavior: "smooth" });

        });
    });

    const moodImages = {
        kitty: {
            default: "/assets/kitty_okay.png",
            eating: "/assets/kitty-FOOD.png",
            sleeping: "/assets/kitty-SLEEP.png",
            bathing: "/assets/kitty-bath.png",
            playing: "/assets/kitty-playing.png",
            exercising: "/assets/kitty-exercise.png",
            happy: "/assets/kitty-happy.png",
            exhausted: "/assets/kitty-exhaust.png",
            crying: "/assets/kitty_cry.png",
            crryying: "/assets/kitty-CRYING.png",
            excited: "/assets/kitty-happy-full-energy.png",
            sad: "/assets/kitty-sad.png",
            verysad: "/assets/kitty-sad-no-energy.png",
        },
        puffy: {
            default: "/assets/dog-okay.png",
            eating: "/assets/DOG-FOOD.png",
            sleeping: "/assets/dog-sleep.png",
            bathing: "/assets/dog-bath.png",
            playing: "/assets/dog-play.png",
            exercising: "/assets/puffy-exercise.png",
            happy: "/assets/dog-HAPPY.png",
            exhausted: "/assets/dog-exhaust.png",
            crying: "/assets/Dog-sad.png",
            excited: "/assets/dog-HAPPY-FULL-ENERGY.png",
            sad: "/assets/Dog-sad.png",
            verysad: "/assets/dog-SAD_NO_ENERGY.png",
        }
    };

    // function showmoodimg(mood) {
    //     petimg.src = moodImages[selectedPet][mood];
    //     setTimeout(updatemoodimg, 2000);
    // }

    function showMoodText(mood) {
        const bubble = document.getElementById("mood-bubble");
        bubble.textContent = mood;
        bubble.classList.add("show");

        setTimeout(() => {
            bubble.classList.remove("show");
        }, 2000); // hide after 2s
    }

// function updatemoodimg(){
//         let mood =" ";

//     if (happiness >= 90 && energy >= 90 && hunger <= 10) {
//         petimg.src = moodImages[selectedPet].excited;
//         // showMoodText("Excited");
//         mood = "Excited";
//     } else if (happiness >= 70 && energy >= 70 && hunger <= 30) {
//         petimg.src = moodImages[selectedPet].happy;
//         // showMoodText("Happy");
//         mood="Happy";
//     } else if (happiness < 30 && energy < 30 && hunger > 30) {
//         petimg.src = moodImages[selectedPet].sad;
//         mood = "Sad";
//     } else if (energy < 20 && happiness <20 && hunger >80) {
//         petimg.src = moodImages[selectedPet].exhausted;
//         // showMoodText("Exhausted");
//         mood = "Exhausted";
//     } else if (happiness < 10 && energy < 5 && hunger > 95) {
//         petimg.src = moodImages[selectedPet].crying;
//         // showMoodText("Sad");
//         mood ="Crying";
//      }
//     // if (happiness >= 90 && energy >= 90 && hunger >= 10) {
//     //     petimg.src = moodImages[selectedPet].excited;
//     //     // showMoodText("Excited");
//     //     mood = "Excited";
//     // } 
//     // else if (happiness >= 70 && energy >= 70 && hunger <= 30) {
//     //     petimg.src = moodImages[selectedPet].happy;
//     //     // showMoodText("Happy");
//     //     mood="Happy";
//     // } else if (happiness < 30 || energy < 30 || hunger > 30) {
//     //     petimg.src = moodImages[selectedPet].sad;
//     //     // showMoodText("Crying");
//     //     mood = "Sad";
//     // } else if (energy < 20 || happiness <20 || hunger >80) {
//     //     petimg.src = moodImages[selectedPet].exhausted;
//     //     // showMoodText("Exhausted");
//     //     mood = " Exhausted";
//     // } else if (happiness < 10 || energy < 5 || hunger > 95) {
//     //     petimg.src = moodImages[selectedPet].crying;
//     //     // showMoodText("Sad");
//     //     mood ="Crying";
//     // } 
//     else {
//         petimg.src = moodImages[selectedPet].default;
//         // showMoodText("Okay");
//         mood ="OKay";
//     }
//     showMoodText(mood);
// }

function updateMoodImg() {
    let mood = "";
    let moodImage = "";

     console.log("Happiness:", happiness, "Energy:", energy, "Hunger:", hunger);

    // Critical state first
    if (happiness < 15 && energy < 10 && hunger > 90) {
        mood = "Crying";
        moodImage = moodImages[selectedPet].crying;
    } 
    // Exhausted
    else if (energy < 35 && happiness < 20 && hunger > 80) {
        mood = "Exhausted";
        moodImage = moodImages[selectedPet].verysad;
    } 
    // Very hungry but active
    else if (hunger > 60 && energy > 60 && happiness < 40) {
        mood = "Grumpy";
        moodImage = moodImages[selectedPet].sad;
    } 
    // Low happiness and energy
    else if (happiness < 30 && energy < 30 && hunger > 55) {
        mood = "Sad";
        moodImage = moodImages[selectedPet].exhausted;
    }
    // Perfect mood
    else if (happiness >= 90 && energy >= 90 && hunger <= 10) {
        mood = "Excited";
        moodImage = moodImages[selectedPet].excited;
    }
    // Good but not perfect
    else if (happiness >= 70 && energy >= 70 && hunger <= 30) {
        mood = "Happy";
        moodImage = moodImages[selectedPet].happy;
    }
    // Low energy only
    else if (energy < 10 && happiness > 50 && hunger < 50) {
        mood = "Tired";
        moodImage = moodImages[selectedPet].verysad;
    }
    // Default fallback
    else {
        mood = "Okay";
        moodImage = moodImages[selectedPet].default;
    }

    // Set image and mood cloud
    petimg.src = moodImage;
    showMoodText(mood);
}

function showActionThenMood(action) {
    // Show action image immediately (e.g., eating)
    petimg.src = moodImages[selectedPet][action];

    // After 2 seconds, update based on game state
    setTimeout(() => {
        updateMoodImg();
    }, 2000);
}


    function updatebar(value, bar, percentLabel) {
        value = Math.max(0, Math.min(100, value));
        bar.style.width = value + "%";
        percentLabel.textContent = value + "%";
        return value;
    }

    function updateAll() {
        happiness = updatebar(happiness, happinessbar, happinesspercent);
        energy = updatebar(energy, energybar, energypercent);
        hunger = updatebar(hunger, hungerbar, hungerpercent);
        // updatemoodimg();
    }


    //buttons
    eatbtn.addEventListener("click", () => {
        showActionThenMood("eating");
        hunger -= 10;
        energy += 5;
        happiness += 5;
        updateAll();
    });

    sleepbtn.addEventListener("click", () => {
        showActionThenMood("sleeping")
        energy += 20;
        happiness -= 5;
        hunger += 10;
        updateAll();
    });

    bathbtn.addEventListener("click", () => {
        showActionThenMood("bathing")
        happiness += 5;
        hunger += 5;
        updateAll();
    });

    playbtn.addEventListener("click", () => {
        showActionThenMood("playing")
        happiness += 10;
        hunger += 10;
        energy -= 10;
        updateAll();
    });

    exercisebtn.addEventListener("click", () => {
        showActionThenMood("exercising")
        energy -= 15;
        happiness += 5;
        hunger -= 10;
        updateAll();
    });


    setInterval(() => {
        happiness -= 2;
        energy -= 2;
        hunger += 2;
        updateAll();
        updateMoodImg();
    }, 1500);

});   