const newDie = document.getElementById('new');
const section = document.getElementById('roll');
let num

function randomNum() {
    num = Math.ceil(Math.random() * 6);
}

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(num);
        this.div.appendChild(this.value);
        this.render();
        this.addEvents();
    }

    addEvents() {
        this.div.addEventListener("click", () => this.div.style.backgroundColor = this.randomColor());
    }

    render() {
        section.appendChild(this.div);
        this.div.id = num;
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

// add squares on button click
newDie.addEventListener("click", function () {
    randomNum();
    new Die();
})