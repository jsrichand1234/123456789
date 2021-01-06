class Ground {
  constructor(x, y, width, height){
      var options = {
        'isStatic':true
      }
      this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, this.width, this.height,options); 
     
    
     World.add(world,this.body);

     
  }
  display(){
  var pos = this.body.position;
  imageMode(CENTER);
  strokeWeight(0);
  fill("white");
  image(this.image,pos.x,pos.y,200,200);
  pop();
  }
}