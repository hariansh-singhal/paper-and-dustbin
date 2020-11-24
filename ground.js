class Ground{
    consructor(){
        this.body=Bodies.rectangle(0,660,1600,20);
        World.add(world,this.body);
    }
    display(){
        push()
        fill("yellow");
        rect(0,660,1600,20);
        pop()
    }
}