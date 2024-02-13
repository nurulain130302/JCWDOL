class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

        getRandomItem(){
            let choice = [0,10]
            const health = choice[Math.round(Math.random() * 1)];
            const power = choice[Math.round(Math.random() * 1)];
            return { health: health, power: power };
        }

        start(){
            let counter = 1;
           while(this.player1.health > 0 && this.player2.health > 0){
            console.log(`\n`);
            console.log(`=== TURN ${counter} ===`);
            console.log(`\n`);
            console.log(" -- STATUS --");
            console.log(this.player1);
            console.log(this.player2);
            console.log(`\n`);
            console.log(" -- Get Item --");
            let randomItem1 = this.getRandomItem();
            this.player1.useItem(randomItem1);
            console.log(" player 1 get item => ", randomItem1);
            let randomItem2 = this.getRandomItem();
            this.player2.useItem(randomItem2);
            console.log(" player 2 get item => ", randomItem2);

            console.log(`\n`);
            console.log(" -- after get item -- ");
            console.log(this.player1);
            console.log(this.player2);

            console.log(`\n`);
            console.log(" -- Start Shoot -- ");
            let hit1 = this.player1.hit(this.player1.power);
            this.player2.health = this.player2.health - hit1;
            console.log(`player 1 hit ${this.player1.power} on player 2`);

            let hit2 = this.player2.hit(this.player2.power);
            this.player1.health = this.player1.health - hit2;
            console.log(`player 2 hit ${this.player2.power} on player 1`);

            console.log(`\n`);
            console.log(" -- aftermate -- ");
            console.log(this.player1);
            console.log(this.player2);
            console.log(`\n`);

            console.log(" === END TURN ===");
            console.log(`\n`);
            counter++;
           } 

           if (this.player1.health > this.player2.health){
            console.log(this.player1.name, " is the winner");
           }else {
            console.log(this.player2.name, " is the winner");
           }
        }
    }

class Player{
    name = "";
    health = 0;
    power = 0;

    constructor(name){
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    hit(power){
        return power;
    }

    useItem(item){
        this.health = this.health + item.health;
        this.power = this.power + item.power;
    }

    showStatus(){
        return this;
    }
}
// buat player
let player1 = new Player("Ain");
let player2 = new Player("Rio");

let arena1 = new ShootingGame(player1, player2);

arena1.start();

// console.log(player1);
// console.log(player2);