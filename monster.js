class Monster{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            dencity:1,
            frictionAir:0.005
        };
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("aqua");
        image(this.image,0,0,this.width,this.height);
        pop();
    };
}