class Box<T> {
    private boxes: T[];

    constructor(){
        this.boxes = [];
    }

    get count(): number{
        return this.boxes.length;
    }

    public add(el: T): void {
        this.boxes.push(el);
    }

    public remove(): void {
        this.boxes.pop();
    }
}

let box1 = new Box<Number>();
box1.add(1);
box1.add(2);
box1.add(3);
console.log(box1.count);

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
