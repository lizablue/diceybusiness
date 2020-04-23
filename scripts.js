const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const sum = document.getElementById('sum');
let showSum = document.getElementById('show-sum');
const section = document.getElementById('roll-section');
let num
let diceArray = [];
let dieVal
let newVal

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.roll();
        this.value = document.createTextNode(num);
        this.div.className = ('dice');
        this.render();
        this.div.addEventListener("click", () => this.reroll());
        
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
        dieVal = document.createTextNode(num);
        newVal = this.div.appendChild(dieVal);
        this.div.id = num;
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
        newVal = element.appendChild(dieVal);
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