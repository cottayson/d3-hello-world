export default class Circle {
  public radius: number;
  public position: [number, number];
  constructor(radius: number, position: [number, number]) {
    this.radius = radius;
    this.position = position;
  }
  
  /**
   * Calculates area of a circle
   */
  getArea() {
    return this.radius * this.radius * Math.PI;
  }

  /**
   * Get string representation of Circle object
   * 
   * __For example:__
   * `Circle: radius = 1, pos = (0, 0)`
   */
  toString() {
    return `Circle: radius = ${this.radius}, pos = (${this.position.join(', ')})`;
  }
}