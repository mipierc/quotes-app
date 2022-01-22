function generate() {
    let ranNum = Math.floor(Math.random() * quoteArr.length);
    document.querySelector("blockquote").innerText = quoteArr[ranNum].line;
    document.querySelector("cite").innerText = quoteArr[ranNum].author;
}
generate()

function generate_background() {
    let ranNum = Math.floor(Math.random() * 7);
    var element = document.getElementById("background");
    switch (ranNum) {
        case 0:
            element.classList.add("bg-pink");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-red");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-blue");
            element.classList.remove("bg-green");
            break;
        case 1:
            element.classList.add("bg-teal");
            element.classList.remove("bg-pink");
            element.classList.remove("bg-red");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-blue");
            element.classList.remove("bg-green");
            break;
        case 2:
            element.classList.add("bg-red");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-pink");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-blue");
            element.classList.remove("bg-green");
            break;
        case 3:   
            element.classList.add("bg-yellow"); 
            element.classList.remove("bg-teal");
            element.classList.remove("bg-red");
            element.classList.remove("bg-pink");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-green");
            element.classList.remove("bg-blue");
            break;
        case 4:
            element.classList.add("bg-purple");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-red");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-pink");
            element.classList.remove("bg-green");
            element.classList.remove("bg-blue");
            break;
        case 5:
            element.classList.add("bg-green");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-red");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-pink");
            element.classList.remove("bg-blue");
            break;
        case 6:
            element.classList.add("bg-blue");
            element.classList.remove("bg-teal");
            element.classList.remove("bg-red");
            element.classList.remove("bg-yellow");
            element.classList.remove("bg-purple");
            element.classList.remove("bg-green");
            element.classList.remove("bg-pink");  
            break;       
        default:
            break;
    }
}
generate_background()