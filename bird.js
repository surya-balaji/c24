class Bird{ constructor(x,y){ 
    var options = { 
        restitution:1.0,
        friction:1.0,
        density:1.0 
    } 
    this.Body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50
    this.height = 50
    World.add(world,this.Body); 
} 
display(){ 
    var pos = this.Body.position; 
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.Body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("blue");
    fill("red"); 
    rectMode(CENTER); 
    rect(0,0,this.width,this.height); 
    pop();
} 
    }