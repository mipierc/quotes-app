function generate() {
    let ranNum = Math.floor(Math.random() * quoteArr.length)
    document.querySelector("blockquote").innerText = quoteArr[ranNum].line;
    document.querySelector("cite").innerText = quoteArr[ranNum].movie;
}
generate()