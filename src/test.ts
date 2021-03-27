import { getpoint, Point } from './Point';
import Circle from './Circle';

let point: Point = getpoint();

console.log('Hello World from your main file!', point);

const c = new Circle(10, [5, 8]);
console.warn(c.toString());

console.log(`area = ${c.getArea()}`);

import { Trees } from './Trees';
let n = new Trees.Node();
n.left = new Trees.Node();
console.log(n);