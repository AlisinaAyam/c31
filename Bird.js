class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    //array to hold the positions of bird while launched 
     this.trajectory=[];
    //p1,p2,p3,...pn
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x,this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y];
    //push (p1.)...push (p2)...push(pn)
    //this.trajectory[p1,p2,p3,......pn]... [[x1,y1],[x2,y2],......[xn,yn]]...2D array  
    // [] index number of array  [] element in that array  this.trajectory[][0]..x 
    //this.trajectory[][1]
    this.trajectory.push (position);
    }

    for(var i=0; i< this.trajectory.length ;i++){
      image (this.smokeimg, this.trajectory[i][0], this.trajectory[i][1]);
    }

  }
}
