function displayElemsDividedByThree () {
    let elems = prompt("Введите значения").split(" ");
    document.write("Значения, кратные трем:" + "<hr>");
    for(let i=0; i < elems.length; i++) {
        if(elems[i] % 3 === 0) {
            document.write(elems[i] + "<br>");
        }
    }
}
