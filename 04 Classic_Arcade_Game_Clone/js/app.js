// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 70;
        this.sprite = 'images/enemy-bug.png';
        this.speed = Math.floor((Math.random() * 200) + 100);
    }
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //Making enemy repeats it's movement.

    if(this.x >= 420) {this.x = -100;};
    //i got collision detection equation from this site:- 
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    //making the collision detection with player and all enemies
    
        if((player.x < this.x + this.width) && 
            (player.x + player.width > this.x) &&
            (player.y < this.y + this.height) &&
            (player.height + player.y > this.y)){
                player.x = 200;
                player.y = 405;
            }
   
};

// Draw the enemy on the screen, required method for game
render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.sprite = "images/char-boy.png"
    }

    update() {
        
    }
    render() {
        //Draw the player object on the canvas.
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(keyCode) {
        if(keyCode == 'left' && (this.x > 0)) {
            this.x -= 100;
        }
        if (keyCode == 'right' && (this.x < 310)) {
            this.x += 100;
        }
        if (keyCode == 'up' && (this.y > 20)) {
            this.y -= 82.2;
        }
        if (keyCode == 'down' && (this.y < 400)) {
            this.y += 82.2;
        }
        //when the player reaches the water it resets to its position.
        if(this.y <= 50) {
            this.x = 200;
            this.y = 405;
        }
    }
}

// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
const allEnemies = [new Enemy(-1, 65), new Enemy(-1, 150), new Enemy(-1, 230)];

// Place the player object in a variable called player
let player = new Player(200,405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

    player.handleInput(allowedKeys[e.keyCode]);
});
