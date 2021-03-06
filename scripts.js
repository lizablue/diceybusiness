const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const sum = document.getElementById('sum');
const diceChar = document.getElementById('dice-char');
const showSum = document.getElementById('show-sum');
const section = document.getElementById('roll-section');
let num
let diceArray = [];
let count = 0;

function swapText() {
    let btnText = document.getElementById("dice-char");
    if (btnText.innerHTML === "dice!") {
        btnText.innerHTML = "no dice!";
    } else {
        btnText.innerHTML = "dice!";
    }
}

function dieFace() {
    diceArray.forEach(element => {
        element.style.border = 'none';
        if (element.innerHTML === '1') {
            element.innerHTML = '\u2680';
        } else if (element.innerHTML === '2') {
            element.innerHTML = '\u2681';
        } else if (element.innerHTML === '3') {
            element.innerHTML = '\u2682';
        } else if (element.innerHTML === '4') {
            element.innerHTML = '\u2683';
        } else if (element.innerHTML === '5') {
            element.innerHTML = '\u2684';
        } else if (element.innerHTML === '6') {
            element.innerHTML = '\u2685';
        }
    });
}

function numDie() {
    diceArray.forEach(element => {
        element.style.border = 'solid 3px';
        if (element.innerHTML === '\u2680') {
            element.innerHTML = '1';
        } else if (element.innerHTML === '\u2681') {
            element.innerHTML = '2';
        } else if (element.innerHTML === '\u2682') {
            element.innerHTML = '3';
        } else if (element.innerHTML === '\u2683') {
            element.innerHTML = '4';
        } else if (element.innerHTML === '\u2684') {
            element.innerHTML = '5';
        } else if (element.innerHTML === '\u2685') {
            element.innerHTML = '6';
        }
    });
}

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.roll();
        this.value = document.createTextNode(num);
        this.div.className = ('dice');
        this.render();
        this.div.addEventListener("click", () => this.reroll());
        this.div.addEventListener("dblclick", () => this.remove());
    }

    render() {
        section.appendChild(this.div);
        this.div.id = num;
        this.div.appendChild(this.value);
        diceArray.push(this.div);
    }

    roll() {
        num = Math.ceil(Math.random() * 6);
    }

    reroll() {
        showSum.innerHTML = null;
        this.div.textContent = null;
        num = Math.ceil(Math.random() * 6);
        let dieVal = document.createTextNode(num);
        this.div.appendChild(dieVal);
        this.div.id = num;
        if (count % 2 === 0 || count === 0) {
            numDie();
        } else {
            dieFace();
        }
    }

    remove() {
        section.removeChild(this.div);
        let divIndex = diceArray.indexOf(this.div);
        diceArray.splice(divIndex, 1);
    }

}

// add die on button click
newDie.addEventListener("click", function () {
    showSum.innerHTML = null;
    if (count % 2 === 0 || count === 0) {
        new Die();
        numDie();
    } else {
        new Die();
        dieFace();
    }
});

// reroll on button click
reroll.addEventListener("click", function () {
    showSum.innerHTML = null;
    diceArray.forEach(element => {
        element.textContent = null;
        num = Math.ceil(Math.random() * 6);
        dieVal = document.createTextNode(num);
        element.appendChild(dieVal);
        element.id = num;
    });
    if (count % 2 === 0 || count === 0) {
        numDie();
    } else {
        dieFace();
    }
});

//sum dice values on button click
sum.addEventListener('click', function () {
    showSum.innerHTML = null;
    let diceValArray = [];
    diceArray.forEach(element => {
        let diceVal = parseInt(element.id);
        diceValArray.push(diceVal);
    })
    const add = arr => arr.reduce((a, b) => a + b, 0);
    let sumDice = add(diceValArray);
    diceTotal = document.createTextNode(`Total = ${sumDice}`);
    showSum.appendChild(diceTotal);
});

diceChar.addEventListener('click', function () {
    count++;
    swapText();
    if (count % 2 === 0 || count === 0) {
        numDie();
    } else {
        dieFace();
    }
});