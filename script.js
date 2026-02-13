// Loading Screen
window.onload = function() {
    setTimeout(function() {
        var loading = document.getElementById("loading-screen");
        var main = document.getElementById("main-content");

        if(loading) loading.style.display = "none";
        if(main) main.style.display = "block";
    }, 2000);
};

// Countdown
var releaseDate = new Date("February 15, 2026 00:19:00").getTime();

if(document.getElementById("countdown")){
    setInterval(function() {
        var now = new Date().getTime();
        var distance = releaseDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById("countdown").innerHTML =
            days + " days " + hours + " hours";

    }, 1000);
}

// Load Story
var params = new URLSearchParams(window.location.search);
var story = params.get("title");

if(story){

    if(story === "dance"){
        document.getElementById("story-title").innerText = "Dance of the 2 Empires";
        document.getElementById("synopsis").innerText =
            "Two rulers. One fragile peace. A court built on silence and power.";
        document.getElementById("actual-story").innerText =
            "PASTE FULL STORY OF DANCE HERE.";
    }

    if(story === "anamnesis"){
        document.getElementById("story-title").innerText = "Anamnesis";
        document.getElementById("synopsis").innerText =
            "Memory returns like a ghost that refuses burial.";
        document.getElementById("actual-story").innerText =
            "PASTE FULL STORY OF ANAMNESIS HERE.";
    }

    if(story === "empathodexterity"){
        document.getElementById("story-title").innerText = "Empathodexterity";
        document.getElementById("synopsis").innerText =
            "When empathy becomes strategy, who remains human?";
        document.getElementById("actual-story").innerText =
            "PASTE FULL STORY OF EMPATHODEXTERITY HERE.";
    }

    if(story === "horizon"){
        document.getElementById("story-title").innerText = "Horizon";
        document.getElementById("synopsis").innerText =
            "At the edge of the known world, something waits.";
        document.getElementById("actual-story").innerText =
            "PASTE FULL STORY OF HORIZON HERE.";
    }
}

// Read Button
function startReading(){
    document.getElementById("story-content").style.display = "block";
}

// Finished Detection
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var finish = document.getElementById("finished-message");
        if(finish) finish.style.display = "block";
    }
};

// Like Button
var likes = 0;
function likeStory(){
    likes++;
    document.getElementById("like-count").innerText = likes;
}

// Comments
function addComment(){
    var input = document.getElementById("comment-input");
    var commentSection = document.getElementById("comment-section");

    if(input.value.trim() !== ""){
        var newComment = document.createElement("p");
        newComment.innerText = input.value;
        commentSection.appendChild(newComment);
        input.value = "";
    }
}

// Theme
function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Highlight & Annotation (basic toggle flags)
var highlightEnabled = false;
var annotationEnabled = false;

function toggleHighlight(){
    highlightEnabled = !highlightEnabled;
}

function toggleAnnotation(){
    annotationEnabled = !annotationEnabled;
}
