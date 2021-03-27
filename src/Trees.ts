/*
Each node is splitting point
*/

export namespace Trees {
  export class Node {
    left: Node | null;
    right: Node | null;
    splitValue: number;
    /**
     * 
     * @param splitValue is a value that we must check to distinguish where left child and right child positioned in properties space
     */
    constructor(splitValue: number = 0) {
      this.left = null;
      this.right = null;
      this.splitValue = splitValue;
      document!.addEventListener('load', function () {
        
      })
    }
  }  

  export class DesicionTree {
    
  }
}