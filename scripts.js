const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const sum = document.getElementById('sum');
const diceChar = document.getElementById('dice-char');
let showSum = document.getElementById('show-sum');
const section = document.getElementById('roll-section');
let num
let diceArray = [];

function swapText() {
    let btnText = document.getElementById("dice-char");
    if (btnText.innerHTML === "dice!") {
        btnText.innerHTML = "no dice!";
    } else {
        btnText.innerHTML = "dice!";
    }
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
    new Die();
})

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
})

//sum dice values on button click
sum.addEventListener('click', function () {
    let diceValArray = [];
    showSum.innerHTML = null;
    diceArray.forEach(element => {
        let diceVal = parseInt(element.innerHTML);
        diceValArray.push(diceVal);
    })
    const add = arr => arr.reduce((a, b) => a + b, 0);
    let sumDice = add(diceValArray);
    diceTotal = document.createTextNode(`Total = ${sumDice}`);
    showSum.appendChild(diceTotal);
})

diceChar.addEventListener('click', function () {
    swapText();
    diceArray.forEach(element => {
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
});