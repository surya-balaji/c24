class Log{ constructor(x,y,height,angle){ 
    var options = { 
        restitution:1.0,
        friction:2.0,
        density:1.0 
    } 
    this.Body = Bodies.rectangle(x,y,20,height,options);
    this.width = 20 
    this.height = height 
    Matter.Body.setAngle(this.Body,angle);
    World.add(world,this.Body); 
} 
display(){ 
    var pos = this.Body.position; 
    var angle = this.Body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("brown");
    fill(255); 
    rectMode(CENTER); 
    rect(0,0,this.width,this.height); 
    pop();
} 
    }