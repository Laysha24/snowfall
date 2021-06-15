 class Snowfall {
constructor() {
    var options = {isStatic : false}
    this.snow = Bodies.rectangle(random(1,800),10,10,10,options) 
    this.image= loadImage("snow4.webp")
    World.add(world,this.snow)
}
display() {
    image(this.image,this.snow.position.x,this.snow.position.y,10,10)
}
 }