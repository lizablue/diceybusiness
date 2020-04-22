const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const sum = document.getElementById('sum');
const section = document.getElementById('roll-section');
let num
let diceArray = [];

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.roll();
        this.value = document.createTextNode(num);
        this.div.className = ('dice');
        this.render();
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
}

// add die on button click
newDie.addEventListener("click", function() {
    new Die();
})

// reroll on button click
reroll.addEventListener("click", function() {
    diceArray.forEach(element => {
        element.textContent = null;
        num = Math.ceil(Math.random() * 6);
        dieVal = document.createTextNode(num);
        newVal = element.appendChild(dieVal);
        element.id = num;
    });
})

//sum dice values on button click
sum.addEventListener('click', function() {
    diceArray.forEach(element => {
        let diceVal = element.innerHTML;
        let diceValArray = Array.from(diceVal);
        console.log(diceVal);
    })
})