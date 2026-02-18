function tickUp() {
    let counter = document.getElementById("counter");
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue - 1;
}

function runForLoop() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= counterValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";
    let i = 1;

    while (i <= counterValue) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
        i++;
    }

        document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    if (counterValue < 5) {
        console.log(multiples);
        return;
    }

    for (let i = 5; i <= counterValue; i += 5) {
        multiples.push(i);
    }

    multiples.reverse();

    console.log(multiples);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(carNumber) {
    let car;

    if (carNumber === 1) {
        car = carObject1;
    } else if (carNumber === 2) {
        car = carObject2;
    } else if (carNumber === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    }
}