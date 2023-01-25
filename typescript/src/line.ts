function newLine (point1: Point, point2: Point) {
    return {    
        draw() {
            const x1: number = point1.getX();
            const y1: number = point1.getY();
            const x2: number = point2.getX();
            const y2: number = point2.getY();
            
            // assume implementation 
    
            console.log("Line drawn from (" + x1 + ", " + y1 +
                        ") to (" + x2 + ", " + y2 + ")");
        }
    }
}

export { newLine }