class Chain{

constructor(bodyA,bodyB){
var options={

bodyA: bodyA,
bodyB: bodyB,
stiffness:0.04,
length:10
}
this.Chain=Constraint.create(options);
World.add(world,this.chain);
}
display(){
    var actionA=this.chain.bodyA.position;
    var actionB=this.chain.bodyB.position;
    strokeWeight(3);
    line(actionA.x,actionA.y,actionB.x,actionB.y);








}

} 