class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this._elementIndex = this.weight * this.melonSort.length;
    }
    get elementIndex() {
        return this._elementIndex;
    }
    toString() {
        return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        this.index = 0;
    }
    morph() {
        const currentIndex = this.index % this.elements.length;
        this.index++;
        return this.elements[currentIndex];
    }
    toString() {
        let cutIndex = super.toString().indexOf('\n');
        return `Element: ${this.morph()}` + super.toString().slice(cutIndex);
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
//# sourceMappingURL=elemelons.js.map