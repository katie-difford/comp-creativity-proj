//Genereate crime stories

function generateCrimeIncidents() {
    document.getElementById("incidents").innerHTML = '<input type = "radio" name = "incident" onclick = "crimeGuilt()">One of the characters feel guilty <br>' + 
    '<input type = "radio" name = "incident" onclick = "crimeKeep()">One of the characters keeps the item <br>' +
    '<input type = "radio" name = "incident" onclick = "crimeSteal()">The character enjoys commiting crimes <br>';
}

function crimeGuilt() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    crimeStoryStart(char1, char2);
    crimeStoryEndGuilt(char1, char2);
}

function crimeKeep() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    crimeStoryStart(char1, char2);
    crimeStoryEndKeep(char1, char2);
}

function crimeSteal() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    crimeStoryStart(char1, char2);
    crimeStoryEndEnjoy(char1, char2);
}

function crimeStoryStart(char1, char2) {
    document.getElementById("storyStart").innerHTML = 
    char1 + " and " + char2 + " where walking home from school on a hot summer's day, on their walk they happened to pass a corner shop ran by a family friend (Mr Danish), the girls popped in to escape the heat" +
    " and sought refuge in the chilled section, upon seeing the ice cream the girls decided that they'd buy one each, only to discover they lacked the funds. " + char2 + " went to buy an ice cream while " + char1 + 
    " slipped one her bag and followed " + char2 + " out, Mr Danish smiled to the girls as they left and presented " + char1 + " with an ice cream."
}

function crimeStoryEndGuilt(char1, char2) {
    document.getElementById("storyEnd").innerHTML = 
    "Once they got out the shop, and " + char1 + " began munching on her ice cream, " + char2 + " began to feel a pang of guilt in her stomach. Even though the sun was burning her face and she desperately wanted to " +
    "feel the cold of the ice cream on her tongue, she decided to return what she had stolen to Mr Danish. She walked into the shop, placed the unopened treat on the counter, and apologised to Mr Danish for " +
    "her behaviour and turned to leave. Mr Danish called " + char2 + " back and gave her the ice cream. He said her honesty deserved a reward, but be sure never to steal again!" 
}

function crimeStoryEndKeep(char1, char2) {
    document.getElementById("storyEnd").innerHTML =
    "Without realising what her friend had done, " + char1 + " opened her treat and began munching away at the cold ice cream. " + char2 + " opened hers too and began to taste the strawberry flavour she had chosen. " + 
    char1 + " asked her where she found the money for her ice cream, but " + char2 + " refused to tell. She continued to eat the ice cream all the way home from school and never told her friend how she managed to obtain " +
    "the refreshment."
}

function crimeStoryEndEnjoy(char1, char2) {
    document.getElementById("storyEnd").innerHTML =
    char2 + " left the shop in haste. She couldn't believe what she had done and was surprised at herself. She was even more surprised at the adrenaline she felt running through her veins after her actions. She liked it; " +
    "the feeling of her accelerated heart rate, and her slightly sweaty palms. She wanted to feel it again. She went to the next shop along the road and walked over to where the chocolate bars were stored. She carefully " +
    "placed one in her bag and casually left the shop. She had the feeling she so loved again and couldn't wait for her next steal."
}