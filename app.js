console.log("TOM THIS GOTCHI");

const $body = $("body");

class Tamagotchi {
    constructor(name) {
        this.hunger = 0;        
        this.sleep = 0;
        this.boredom = 0;
        this.age = 0;
        this.name = name;
    }
}

const givenName = prompt("What do you want to name your pet?");

const tommy = new Tamagotchi(givenName);

const $eaglet = $("<img src='https://static.studyladder.com/cdn/site/f9/a6e6b62cd616.gif' alt='eaglet'>");

$(".avatar").prepend($eaglet);


const addMonitors = () => {
    const hungerMonitor = `<div id='hungerMonitor'>${givenName}'s hunger is at ${tommy.hunger}/10</div>`;
    const sleepMonitor = `<div id='sleepMonitor'>${givenName}'s sleepiness is at ${tommy.sleep}/10</div>`;
    const boredomMonitor = `<div id='boredomMonitor'>${givenName}'s boredom is at ${tommy.boredom}/10</div>`;
    const ageMonitor = `<div id='ageMonitor'>${givenName}'s age is ${tommy.age}</div>`;

    $(".monitors").append(hungerMonitor);
    $(".monitors").append(sleepMonitor);
    $(".monitors").append(boredomMonitor);
    $(".monitors").append(ageMonitor);
};

const addButtons = () => {

    $("#feed").text(`feed ${givenName}`)
    $("#lights").text(`put ${givenName} down (for a nap)`)
    $("#play").text(`play with ${givenName}`)

    $("#feed").on("click", function(){
        tommy.hunger--;
        if(tommy.hunger < 0){
            tommy.hunger = 0;
        }
        $("#hungerMonitor").text(`${givenName}'s hunger is at ${tommy.hunger}/10`);  
    })

    $("#lights").on("click", function(){
        tommy.sleep--;
        if(tommy.sleep < 0){
            tommy.sleep = 0;
        }
        $("#sleepMonitor").text(`${givenName}'s sleepiness is at ${tommy.sleep}/10`);  
    })

    $("#play").on("click", function(){
        tommy.boredom--;
        if(tommy.boredom < 0){
            tommy.boredom = 0;
        }
        $("#boredomMonitor").text(`${givenName}'s boredom is at ${tommy.boredom}/10`);  
    })

    $("#task").text(`keep ${givenName} alive`);
}
let hungerTimer = 0;
let ageTimer = 0;
let sleepTimer = 0;
let boredomTimer = 0;

const runTimers = () => {
    hungerTimer =  setInterval(function(){ 
            tommy.hunger++; 
            $("#hungerMonitor").text(`${givenName}'s hunger is at ${tommy.hunger}/10`);  
            if(tommy.hunger === 10){
                alert(`${givenName} died of hunger. Way to go.`)
                // $("#monitors").append($("div").html("<h2>GAME OVER</h2>"));
                tommyDied();
            }
        }, 5000);

    sleepTimer = setInterval(function(){ 
            tommy.sleep++; 
            $("#sleepMonitor").text(`${givenName}'s sleepiness is at ${tommy.sleep}/10`);  
            if(tommy.sleep === 10){
                alert(`${givenName} died of exhaustion. Way to go.`)
                // $(".monitors").remove();
                // $("#mountain").append($("div").html("<h2>GAME OVER</h2>"));
                tommyDied();
            }
        }, 15000);

    boredomTimer = setInterval(function(){ 
            tommy.boredom++; 
            $("#boredomMonitor").text(`${givenName}'s boredom is at ${tommy.boredom}/10`);
            if(tommy.boredom === 10){
                alert(`${givenName} died of boredom. Way to go.`)
                // $(".monitors").remove();
                // $("#mountain").prepend($("div").html("<h2>GAME OVER</h2>"));
                tommyDied();
            }
        }, 8000);

    ageTimer = setInterval(function(){ 
            tommy.age++; 
            $("#ageMonitor").text(`${givenName}'s age is ${tommy.age}`);  
            if(tommy.age === 1){
                alert(`${givenName} is growing!`)
                $(".avatar").empty();
                $(".avatar").append("<img src='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_408,w_408,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_640/sweiler_TD_25gif2_lmutyv.gif'>");
            }
            if(tommy.age === 2){
                alert(`${givenName} is growing!`)
                $(".avatar").empty();
                $(".avatar").append("<img src='http://gifdanceparty.giphy.com/assets/dancers/grooveowl.gif'>");
            }
            if(tommy.age === 3){
                alert(`${givenName} is growing!`)
                $(".avatar").empty();
                $(".avatar").append("<img src='https://i.pinimg.com/originals/33/e5/d4/33e5d48e7e0e717c2ebe50c914b12f54.gif'>");
            }
            if(tommy.age === 4){
                alert(`${givenName} is growing!`)
                $(".avatar").empty();
                $(".avatar").append("<img src='http://www.animatedimages.org/data/media/238/animated-eagle-image-0036.gif'>");
            }
            if(tommy.age === 5){
                alert(`${givenName} has reached apotheosis. Way to go!`)
                alert(`Also, ${givenName} is now dead. C'est la vie.`)
                // $(".monitors").remove();
                // $("#mountain").prepend($("<h2>GAME OVER</h2>"));
                tommyDied();
            }
        }, 25000);

    hungerTimer;
    sleepTimer;
    boredomTimer;
    ageTimer;
}

const tommyDied = () => {
    $(".monitors").remove();
    $(".avatar").empty();
    $(".avatar").append("<img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_lm2JI7sGwYI%2FTS5vRPPfPfI%2FAAAAAAAAL8E%2FHw6CEGu0bQk%2Fs400%2Fdead%2Bbird.jpg&f=1'>");
    $(".avatar").css("animation-iteration-count", 0);
    $(".avatar").css("left", "40%");
    $(".avatar").css("top", "30%");
    clearInterval(hungerTimer);
    // hungerTimer = 0;
    clearInterval(sleepTimer);
    // sleepTimer = 0;
    clearInterval(boredomTimer);
    // boredomTimer = 0;
    clearInterval(ageTimer);
    // ageTimer = 0;
    $("h1").text(`${givenName} is ded`);
    // $("#ex1 a").html("<a rel='modal:open'>Play again?</a>");
}

const runGame = () => {
    addMonitors();
    addButtons();
    runTimers();
}

runGame();