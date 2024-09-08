class Model {
    constructor() {
        this.memory = [];
    }

    generate(input) {
        this.memory.push(input);
        const latinSquare = this.latinSquare();
        const stochasticValue = Math.floor(Math.random() * latinSquare.length);
        return "AI: " + latinSquare[stochasticValue].slice(0, stochasticValue).join(" ");
    }

    latinSquare() {
        const n = this.memory.length;
        return Array.from({ length: n }, (_, row) => 
            this.memory.map((_, col) => this.memory[(row + col) % n])
        );
    }
}
