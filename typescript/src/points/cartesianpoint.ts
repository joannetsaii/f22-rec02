function cartesianPoint (x: number, y: number): Point {
    return {
        getX() {
            return x;
        },
        getY() {
            return y;
        }
    }
}