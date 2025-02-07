function myAddition() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let final = first + second;
    let outputElement = document.getElementById("output");

    if (final < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
    outputElement.innerHTML = String(final);
}

function mySubtraction() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let final = first - second;
    let outputElement = document.getElementById("output");

    if (final < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
    outputElement.innerHTML = String(final);
}

function myMultiplication() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let final = first * second;
    let outputElement = document.getElementById("output");

    if (final < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
    outputElement.innerHTML = String(final);
}

function myDivision() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let final = first / second;
    let outputElement = document.getElementById("output");

    if (final < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
    outputElement.innerHTML = String(final);
}

function myPower() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let final = first;

    for (let i = 1; i < second; i++) {
        final *= first;
    }

    let outputElement = document.getElementById("output");

    if (final < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
    outputElement.innerHTML = String(final);
}

function myClear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    let outputElement = document.getElementById("output");
    outputElement.style.color = "black";
    outputElement.innerHTML = "";
}
