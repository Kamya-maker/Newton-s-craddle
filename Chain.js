class Chain{
    constructor(bodyA,pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:100
      }
      this.body = Constraint.create(options);
      this.pointB=pointB
      World.add(world, this.body);
    }
    display(){
      var pointA =this.body.bodyA.position;
      var pointB=this.pointB;
      strokeWeight(4);
      fill("yellow")
      line(pointA.x,pointA.y,poitnB.x,pointB.y)
    }
  }