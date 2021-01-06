class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            strokeWeight(10);
            stroke(0, 230, 207);
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);

        }
    }
    
    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

}

