class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
    this.sling=Constraint.create(options)
     World.add(world,this.sling)   
    
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    
}