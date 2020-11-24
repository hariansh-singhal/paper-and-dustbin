class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        Matter.Bodies.circle(100,640,20,options);
        this.radius=radius;
    }
    display(){
        push()
        fill("pink")
        circle(100,640,20);
        pop();
    }

}