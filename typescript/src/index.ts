import { newLine } from "./line";
import { newPolarPoint } from "./points/polarPoint";

const point1: Point = newPolarPoint(2, 0);
const point2: Point = newPolarPoint(4, Math.PI);

const line = newLine(point1, point2);

line.draw();
