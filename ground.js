class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
            
        }
    

    this.ground=Bodies.rectangle(x,y,width,height,ground_options)
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.image=loadImage("_log.png")
    World.add(world,this.ground)
}

display(){

    var pos = this.ground.position;

    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop()
}

}