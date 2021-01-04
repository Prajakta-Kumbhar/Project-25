class Paper
{
    constructor(xpos,ypos,radius)
    {
       var body_options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2}
       this.body = Bodies.circle(xpos,ypos,radius,body_options)
       this.radius = radius;
       this.image = loadImage("images/paper.png")
       
       World.add(world, this.body);
    }

    display()
    {
      var position = this.body.position;

      ellipseMode(RADIUS);
      image(this.image,position.x,position.y - 20,this.radius + 30,this.radius + 30);
    }
}