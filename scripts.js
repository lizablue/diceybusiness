const newDie = document.getElementById('new');
const reroll = document.getElementById('reroll');
const section = document.getElementById('roll');
let num

function randomNum() {
    num = Math.ceil(Math.random() * 6);
}

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
// reroll.addEventListener("click", function () {
//     // let dice = document.getElementsByClass('dice');
//     for (value in Die) {
//         this.roll();
//     }
// })