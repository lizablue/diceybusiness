const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const section = document.getElementById('roll-section');
let num
let dice = document.getElementsByClassName('div');
let dieArray = Array.from(dice);


class Die {
    constructor() {
        this.div = document.createElement('div');
        this.roll();
        this.value = document.createTextNode(num);
        this.div.className = ('dice');
        this.render();
        this.div.addEventListener("click", () => this.div.style.backgroundColor = this.randomColor());

    }

    render() {
        section.appendChild(this.div);
        this.div.id = num;
        this.div.appendChild(this.value);
        dieArray.push(this.div);
    }

    roll() {
        num = Math.ceil(Math.random() * 6);
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

// add die on button click
newDie.addEventListener("click", function () {
    new Die();
})

// reroll on button click
reroll.addEventListener("click", function () {

    dieArray.forEach(element => {
        element.textContent = null;
        num = Math.ceil(Math.random() * 6);
        dieVal = document.createTextNode(num);
        newVal = element.appendChild(dieVal);
        element.id = num;
    });
})