// Generate comedy stories

function generateComedyIncidents() {
    document.getElementById("incidents").innerHTML = '<input type = "radio" name = "incident" onclick = "comedyPrank()">The characters throw something <br>' + 
    '<input type = "radio" name = "incident" onclick = "comedyPrank1()">One of the characters slips on a banana <br>' +
    '<input type = "radio" name = "incident" onclick = "comedyPrank2()">One of the characters gets a surprise <br>';
}

function comedyPrank() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    comedyStoryStart(char1, char2);
    comedyStoryEndPrank(char1, char2);
}

function comedyPrank1() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    comedyStoryStart(char1, char2);
    comedyStoryEndPrank1(char1, char2);
}

function comedyPrank2() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    comedyStoryStart(char1, char2);
    comedyStoryEndPrank2(char1, char2);
}

function comedyStoryStart(char1, char2) {
    document.getElementById("storyStart").innerHTML = 
    char1 + " and " + char2 + " work at a popular supermarket chain and fancy themselves as a pair of comedians. One day " + char1 + " was hiding in the plant room pretending to be busy and had a brilliant idea for a" +
    " practical joke. The hatch in the plant room opens directly into the warehouse below, so he phoned " + char2 + " and told him to meet him in said area of the warehouse."
}

function comedyStoryEndPrank(char1, char2) {
    document.getElementById("storyEnd").innerHTML = 
    char1 + " swiftly went to get buckets of water and stood by the hatch waiting for " + char2 + " to come into the warehouse, upon his arrival the prankster soaked him, leaving them both in stitches!"
}

function comedyStoryEndPrank1(char1, char2) {
    document.getElementById("storyEnd").innerHTML =
    char1 + " placed a banana just inside the entrance of the door, knowing that it was in the direct path of " + char2 + ". " + char1 + " pretended to be working, so as to conceal himself as the culprit " +
    "for the prank. He tried to hide his face from the door so as not to laugh as soon as " + char2 + " entered. " + char2 + " burst through the door and immediately stepped on the banana skin placed there before. " +
    char1 + " fell about laughing at " + char2 + " strewn across the floor in dismay!!"
}

function comedyStoryEndPrank2(char1, char2) {
    document.getElementById("storyEnd").innerHTML =
    char1 + " very carefully placed a wall of clingfilm across the door and hid, patiently waiting for " + char2 + " to come in. He could barely contain his giggling in anticipation. All of a sudden " 
    + char2 + " burst through the door, but managed to get tangled in the clingfilm barrier already placed before! " + char1 + " could conceal his amusement no longer and fell on the floor in a fit of laughter!!"
}