class Watcher{
    constructor(node,key){
    this.node=node;
    this.key=key;
    }
    
    update(val){
       
    // let newText= this.node.innerText.replace(`{{${this.key}}}`,val)
    // this.node.innerText=newText;
    this.node.innerText=val;
    }
}