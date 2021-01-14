class Pakage {
    constructor(x,y){
      this.image = loadImage("package.png");
        var options={
            
            'restitution': 0.3,
            'friction':1,
            'density':1
          }
          this.width = 50;
          this.height =50;
          this.body=Bodies.rectangle(x,y,50,50,options)
          World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        
        if (keyDown("down_arrow")) {
         this.velocityY = 4;
        }
          
        push() ;
        translate(pos.x,pos.y) ;
        rotate(angle) 
        imageMode(CENTER);
        
        
        image(0,0,this.width,this.height); 

        pop(); 

    }
}