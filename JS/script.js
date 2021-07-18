let textbox = document.getElementById("textbox");
textbox.addEventListener('input', function() {
    //logic for character count
    var text = this.value;
    let length = text.length;
    document.getElementById("Character").innerHTML = length;
    //logic for word count
    text = text.trim();
    let word = text.split(" ");
    cleanword = word.filter(function(elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanword.length;

});