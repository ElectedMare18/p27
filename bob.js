class Bob{
  constructor(x,y,width,height) {



    var options = {
        'density':1.5,
        'friction':0,
        'restitution':0.5,
    };

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 50;
    this.height = 50;
    
  } ;
  display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      
    }
}