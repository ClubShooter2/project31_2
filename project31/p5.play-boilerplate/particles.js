class particles{

constructor(x,y) {
    var options={
        restitution:0.6
    }
    this.body = Bodies.circle(x,y,10,options);
    this.Width = 20;
    this.Height = 20;
    World.add(world,this.body);
}
display() {
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   
   ellipse(0,0,this.Width,this.Height);
   pop();
}
}