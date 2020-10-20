class Box{ constructor(x,y,width,height){ 
    var options = { 
        restitution:1.0,
        friction:1.0,
        density:1.0 
    } 
    this.Body = Bodies.rectangle(x,y,width,height,options);
    this.width = width 
    this.height = height 
    World.add(world,this.Body); 
} 
display(){ 
    var pos = this.Body.position; 
    var angle = this.Body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(255); 
    rectMode(CENTER); 
    rect(0,0,this.width,this.height); 
    pop();
} 
    }