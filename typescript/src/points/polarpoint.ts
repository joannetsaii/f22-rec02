// interface PolarPoint {
//     len: number,
//     angle: number,
//     computeX: () => number
//     computeY: () => number
// }

// ^^ Since the interface is not used by other classes, delete it and use the Point interface instead.

function newPolarPoint (len: number, angle: number): Point {
    function computeX(): number {
        return Math.round(len * Math.cos(angle))
    }

    function computeY(): number {
        return Math.round(len * Math.sin(angle))
    }

    return {
        // len,
        // angle,
        // ^^ Not used in computation

        // computeX: function (): number {
        //     return Math.round(len * Math.cos(angle))
        // },

        // computeY: function (): number {
        //     return Math.round(len * Math.sin(angle))
        // }
        // ^^ Don't need to EXPORT how the coordinates are computed
        // Instead, return getX and getY
        getX() {
            return computeX();
        },
        getY() {
            return computeY();
        }


    }
}

export { newPolarPoint }