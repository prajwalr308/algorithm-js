class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
          console.log(array)
          array.push(this.name)
          console.log("children",this)
          for(const child of this.children){
              child.depthFirstSearch(array)
          }
          return array
    }
  }
  