class Dustbin
{
   constructor(x,y,width1,height1)
   {

     var body_options = {isStatic: true}
     this.body = Bodies.rectangle(x,y,width1,height1,body_options);
     this.width = width1;
     this.height = height1;
     this.x = x;
     this.y = y;
     this.image = loadImage("images/dustbin.png")
     World.add (world,this.body);
   }

   display()
   {
     var position = this.body.position;

     fill("red");
     

     if(this.width === 150)
     {
       imageMode(CENTER);
       image(this.image,this.x + 15,this.y - 90,this.width + 50,this.height * 10);
     }
      else  
      {
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height)
      }

   }
}