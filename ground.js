class Ground{
  constructor(x,y,width,height) {
    var options = {
      isStatic:true
      }
      this.Body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.Body);
  }
display() {
    var pos = this.Body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x,pos.y,this.width,this,height);
  }
}