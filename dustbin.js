class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        push()
        fill("green")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}