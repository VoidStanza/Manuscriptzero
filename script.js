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
            "The crown didn’t feel any heavier today — but something beneath it did.
Was it her heart, lost somewhere amidst this gilded court?Or her mind, spiraling into the complexities of the Empire’s current political stance and the growing stack of orders she had yet to sign?Or maybe it was her body — weary and still waiting for the warmth she had once been promised.
She shook the feeling off as best she could. The court watched her.The sound that finally broke through the tension wasn’t the music — it was the voice she knew best.
Her only true friend — now the Emperor of the South — stood before her, asking for her hand.Not for a game in the palace garden this time, but for a dance in the ballroom.A dance between two powerful nations, under the eyes of a hundred watching nobles.
She took his hand.
They stepped onto the floor — not as the children they once were, but as rulers. Still, something in their steps remembered old rhythms.
As the orchestra played on, they moved with regal precision, their posture dignified, their gaze steady.They looked every bit the pair the court wanted to see — strong, composed, and perfectly suited to be hailed as “The First Nobles.”
But somewhere between the fourth and fifth step, the past crept in.
They found themselves drifting —Their legs in time with the music of the present,Their minds slipping back to old memories:Shared camping trips, whispered jokes around a fire, a clumsy first swordfight, the smell of rain on travel cloaks.
The dance ended, but something lingered.
They stepped onto the balcony, champagne in hand. The chill air pressed gently against their skin.For a few moments, they stood in silence, the music fading behind them.
He made a polite remark — something about the alliance, or the Chancellor’s speech.She replied with a practiced smile. The kind you give when there’s too much history in the room.
Then came the pause. Long enough to be uncomfortable. Short enough not to be intentional.
He glanced sideways at her — not at the empress, but at the girl who once got them both grounded for sneaking out to see the stars.
And just like that, she laughed. Not the courtly kind — a real one. Unfiltered. Familiar.
The tension broke. Their words softened.They talked — about the ball, about their ridiculous swordmaster, about small things.
They started as delegates.But by the time their glasses emptied, they had become something else.Not rulers.Not children.But people who remembered what it was like to not be either.";
    }

    if(story === "anamnesis"){
        document.getElementById("story-title").innerText = "Anamnesis";
        document.getElementById("synopsis").innerText =
            "Memory returns like a ghost that refuses burial.";
        document.getElementById("actual-story").innerText =
            "RECOLLECTION OF A SUPPOSED PREVIOUS EXISTENCE

INT. MEDICAL COLLEGE – RESEARCH LAB – NIGHT

Dim lighting. The hum of machinery fills the air. DR. Jeevith (30s, ambitious, sleep-deprived) leans over his laptop, eyes scanning the screen. A cold cup of coffee sits beside him, untouched.His fingers hover over the keyboard. -Click.

ON SCREEN: A video recording starts playing. A younger voice, shaky, uncertain.
ARJUN (VIDEO): I... I woke up in the dissection hall. I don’t remember going there.

Jeevith leans in. Pauses the video, rewinds. He exhales sharply, rubbing his face. He checks the hospital logs. Nothing. No record of Arjun’s admission. No proof of his existence was found. Jeevith frowns. His cursor hovers over the video file.
A NOTIFICATION POPS UP."NEW FILE ADDED: ANAMNESIS_002."
 

A chill runs through him.

INT. HOSPITAL HALLWAY – NIGHT

Jeevith walks through the dimly lit corridor. His footsteps echo. Too loud.His breath quickens. Something feels off.Then—he sees him.A figure stands at the far end of the hallway. Back turned.Jeevith slows. His pulse thuds. It’s Arjun.Jeevith’s stomach knots. 

Jeevith:[murmurs under his breath with beads of sweat on his forehead]  He was discharged yesterday… he shouldn't be here…..A beat
Jeevith: [Shakily] Arjun?
Silence.Jeevith takes a step forward.
Jeevith : What are you doing here ? 
Arjun doesn’t move.
Jeevith’s shadow stretches unnaturally. Long, distorted.Then—Arjun turns.Something is wrong. His movements are too smooth. His face too blank.

ARJUN (FLAT, MECHANICAL TONE): You shouldn’t have seen the file.
Jeevith stiffens.The lights flicker. Shadows shift the wrong way.Jeevith takes a step back. Arjun steps forward. But—his shadow does not move.A sickening dread grips Jeevith.
Jeevith (whispers, terrified): No...
Arjun’s unnatural eyes lock onto him.Jeevith’s breath catches. Then—he RUNS.

INT. RESEARCH LAB – NIGHT

Jeevith bursts into the lab, slamming the door shut.His hands tremble as he rushes to his laptop. The screen is still on.

ON SCREEN: Surveillance footage of himself.Sitting at this desk. Watching this exact video. His chest tightens. He turns to look behind him—Nothing.He exhales shakily. Then—
A NEW NOTIFICATION POPS UP."ANAMNESIS_003 – FILE READY FOR NEXT SUBJECT."

Jeevith freezes.
Jeevith (soft, shaky) : Next subject...?
A cold realization washes over him. He’s in the file now.A LOW HUM fills the room. Jeevith stiffens. The hair on his arms rises.Then—the door behind him creaks.His body locks up. Slowly, painfully, he turns his head.
The door is slightly open. A dark figure stands just beyond it. Watching.Whispers slither through the air. Unintelligible. Invasive.
Jeevith swallows. His pulse roars in his ears.
Jeevith (barely a whisper): Who’s there…?
Silence. Then—a voice.
ARJUN (FROM THE DARKNESS): Don’t run.
Jeevith’s breath hitches.Then—the door SLAMS OPEN. A shadowy figure lunges forward.The laptop screen glitches violently.
Jeevith: [SCREAMS]
Everything cuts to black.BLACK SCREEN. SILENCE.
Then—A computer screen flickers on.A NEW FILE OPENS.

ON SCREEN: A grainy surveillance video.
Jeevith. Sitting at the desk. Staring blankly at the screen.A faint hum lingers.

TEXT APPEARS ON SCREEN: "ANAMNESIS_004 – FILE READY FOR NEXT SUBJECT."

FADE TO BLACK. ";
    }

    if(story === "empathodexterity"){
        document.getElementById("story-title").innerText = "Empathodexterity";
        document.getElementById("synopsis").innerText =
            "When empathy becomes strategy, who remains human?";
        document.getElementById("actual-story").innerText =
            " The old woman’s bangles sang a sharp, glass melody as she worked, a rhythmic percussion that cut through the humid air of the bazaar. To the passing crowds, she was just the "Guava Lady," a fixture of the pavement, but to the young girl sitting at her feet, she was a surgeon of the streets."Watch the wrist, Meena," her mother would say, never once looking up from her work. With a swift, silver flash of her paring knife, a firm guava was transformed into perfect, bite-sized pieces of hospitality. Meena watched those hands every day, stained with the nectar of the fruit and the rust-coloured dust of chilli powder, weathered by the relentless sun, yet moving with the grace of a conductor leading a symphony. The cuts seemed effortless yet precise to the millimeter, and in that precision, she honored the fruit by wasting nothing."The hand must be steady, Meena, but the heart must be soft," her mother whispered as she handed a newspaper cone to a hungry child. "That is how you truly serve."Two decades later, the golden sun has been replaced by the sterile, unwavering glare of overhead surgical lamps. The chaotic symphony of the marketplace, the honking rickshaws and shouting vendors has faded into a heavy, clinical silence.Meena looks down at her own hands. They are no longer stained with fruit and chilli powder; instead, they are encased in pale, sterile latex. The rhythmic clinking of glass bangles has been traded for the steady, digital pulse of a heart monitor, a neon green line marking the boundary between life and the unknown. The newspaper-lined crate she once leaned against is now a stainless-steel table covered in a sterile blue drape.She picks up the scalpel. It is significantly smaller and lighter than her mother’s worn paring knife, but as she touches the silver edge to the patient’s skin, she feels that same familiar weight of responsibility.She makes the first incision, a clean, decisive arc. It is the same motion she observed on a street corner years ago, the same unwavering precision once used to quarter a guava. Only now, the "sweetness" she is trying to reach isn't a snack for a child; it is the rhythmic thrum of a human life struggling to continue.The street vendor fed the body, and the daughter mended the life. It was a shared legacy of the wrist. As Meena's scalpel moved, the distinction vanished – different tools, different worlds, but the same sacred precision. She was her mother's daughter, with a quiet inheritance of discipline;  proving that every cut, when guided by a soft heart, is an altar where life is honored. ";
    }

    if(story === "horizon"){
        document.getElementById("story-title").innerText = "Horizon";
        document.getElementById("synopsis").innerText =
            "At the edge of the known world, something waits.";
        document.getElementById("actual-story").innerText =
            "He sits at the edge of the living room, shoes polished, uniform pressed, hair combed just so, and waits as the sunlight pours through the window and pools on the carpet where he sits, watching his parents move around him with soft voices and laughter, telling stories he has told a thousand times, clapping for a medal he earned, for a speech he gave, and he knows they are proud, their pride sharp and bright in the air, but he feels it on the wrong side of himself, like a shadow that mirrors the light without holding it. They call him our boy, and he smiles because he is always careful to smile, memorizing the way their eyes stretch and lift, the way their lips curve over words that belong to someone else, the imagined boy who fits perfectly into the story they built, the one he can never quite be, and he folds his hands, nods at the right moments, laughs when expected, is present and never scolded, never unloved, never absent, and still the hollow grows quietly inside, a patient little erosion of wanting attention that lands nowhere, unnoticed, unremarked, and he eats the cake, smiles at the photographs, listens to the stories, applauds with steady hands, and inside him the stillness lingers, the echo of being seen and not seen at the same time, the ache of being loved as an accessory to love, the soft exhaustion of existing fully and being noticed only partly, a quiet knowing of absence in abundance, a slow weight that presses against the ribs and folds itself into his bones, and he walks through the day like this, through all the care and all the light, holding the impossible understanding that being looked after is not always being held. ";
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
