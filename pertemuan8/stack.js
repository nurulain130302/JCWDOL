class Stack {
    #maxSize;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }

    push(element){
        if(this.#container.length == this.#maxSize){
            console.log("Stack Overflow");
        } else {
            this.#container.push(element);
        }
    }

    pop(){
        if(this.#container.length == 0){
            console.log("Stack Underflow");
        } else {
            this.#container.pop();
        }
    }

    getContainer(){
        return this.#container;
    }
}

let stack1 = new Stack(5);

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(2);
stack1.push(3);
stack1.push(7);
stack1.push(8);


console.log(stack1.getContainer());

stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();

console.log(stack1.getContainer());