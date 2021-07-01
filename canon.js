class Canon {
    constructor(x, y, width, height,angle) {
      this.width = width;
      this.height = height;
    this.x=x
    this.y=y
    this.angle=angle;

    }
    display() {
        
      fill("grey")

      push()
      translate(this.x,this.y);
      rotate(this.angle)
      rect(-10,-20,this.width,this.height)
      pop()
      arc(this.x-40,this.y+80,150,230,PI,TWO_PI);

    }
  }
  