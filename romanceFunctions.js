// Generate romance stories

function generateRomanceIncidents() {
    document.getElementById("incidents").innerHTML = '<input type = "radio" name = "incident" onclick = "romanceInjury()">One of the characters suffers a serious injury <br>' + 
    '<input type = "radio" name = "incident" onclick = "romanceDeath()">One of the characters dies <br>' +
    '<input type = "radio" name = "incident" onclick = "romanceMarried()">The characters get married <br>';
}

function romanceInjury() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    romanceStoryStart(char1, char2);
    romanceStoryEndInjury(char1, char2);
}

function romanceDeath() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    romanceStoryStart(char1, char2);
    romanceStoryEndDeath(char1, char2);
}

function romanceMarried() {
    var char1 = document.getElementById('character1').value;
    var char2 = document.getElementById('character2').value;
    romanceStoryStart(char1, char2);
    romanceStoryEndMarriage(char1, char2);
}

function romanceStoryStart(char1, char2) {
    document.getElementById("storyStart").innerHTML = 
    "Two seagulls, " + char1 + " and " + char2 + ", enjoyed nothing more than sitting on the harbour wall watching the trawlers come in, the smell of fish" + 
    "was something else, but " + char1 + " and " + char2 + " loved it and would caw with delight as they chased discarded off cuts. One day, " + char2 +  
    " arrived at the wall and waited for " + char1 + " to join her. After several hours, " + char1 + " was still nowhere to be seen and as the trawlers came in," +
    " still no sign. " + char1 + " went about her business, ambling around for off cuts with a frown. The next day, " + char1 + " got to the wall and once again, saw no" +
    " sign of " + char2 + ". She sat all day waiting for him but nothing. When the trawlers came in she flew away; the thought of ambling away didn't appeal to her" +
    " without " + char2 + ". She'd return everyday for the next week in hope of seeing her friend, but alas, he was still nowhere to be seen.";
}

function romanceStoryEndInjury(char1, char2) {
    document.getElementById("storyEnd").innerHTML = 
    "After a month, " + char1 + " found herself wandering alone the harbour wall, when she noticed a confused looking seagull carrying a calamari ring, sporting a nasty scar" +
    " above his right eye. The seagull looked a lot like " + char2 + " but didn't seem to recognise " + char1 + ". She went to investigate and to her amazement, found it to be " + char2 + "." +
    " She was initially very angry at being abandoned as she thought her and " + char2 + " were close, but her anger quickly faded to sadness as she realised he had suffered a head injury" +
    " and had no recollection of who she was. She flew with " + char2 + " to the harbour wall in the hope it would stir something (the smell of fish usually does!), but nothing. They spoke" +
    " at great length with " + char2 + " asking question after question. " + char1 + " eventually asked about the calamari ring, to which he replied he had no idea, but he had put himself in danger" +
    " to get it, so figured he would keep it with him until he knew it's purpose. " + char1 + " had a feeling that the ring could be for her, but she would give " + char2 + " a chance to remember" +
    " for himself. The End."
}

function romanceStoryEndDeath(char1, char2) {
    document.getElementById("storyEnd").innerHTML = 
    "Every day, " + char1 + " would wait and wait for " + char2 + " to appear on the horizon. He never came. One day she decided that she had to go and look for him. She flew away from the comfort of the harbour" +
    " and into the distance. She didn't know what direction he flew in, or how far he flew but she had to try. " + char1 + " flew for days and days and there was no sign. Suddenly she spotted something out" +
    " of the corner of her eye. It looked like " + char2 + ". The feathers on his wings were dishevelled and his legs looked broken. " + char1 + " flew down and saw that it was " + char2 + ". She rested her head against" +
    " his chest. To her horror, she found he wasnt breathing and she knew there was nothing more she could do to save him. " + char1 + " couldn't leave him, so picked him up and laid him across her back. She" +
    " began to fly. It was a struggle, not only because of the weight but because of the tears in her eyes. She eventually made it back to the harbour, and placed " + char2 + " gently in the water. He was" +
    " finally home, and " + char1 + " was comforted knowing he would always be with her. The End."
}

function romanceStoryEndMarriage(char1, char2) {
    document.getElementById("storyEnd").innerHTML = 
    "After a while, " + char1 + " got tired of waiting. She was angry because she thought her and " + char2 + " were close, but if he could leave her so easily then clearly not. She carried on each day as if she had never" +
    " known " + char2 + " and told herself that if he ever came back, she would show him how angry he made her. One day, whilst looking for fish in the harbour, " + char1 + " heard a familiar caw. She looked up to see " + char2 + " flying" +
    " towards her over the harbour wall. She wanted to be angry but couldn't help feel a flutter of relief, happiness and excitement as her eyes focused on him. He landed next to her and without saying a word, he got" +
    " down on one wing and apologised for being gone so long, but he wanted to get her dad's blessing before asking her to live with him forever in the harbour. All the anger " + char1 + " felt before melted away as she" +
    " instantly agreed. They embraced as the sun set over the harbour and they lived happily every after. The End."
}