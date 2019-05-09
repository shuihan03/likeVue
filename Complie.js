
class Complie{
    constructor(el,vm){
    this.vm=vm;
    this.dom=  document.querySelector(el);
    
    }

    comipleHtml(){
       Array.from(this.dom.children).forEach(child => {
            
            if(/\{\{(.*)\}\}/.test(child.outerHTML)){
                let key = RegExp.$1.trim()
                Observer.target= new Watcher(child,key);
                this.vm[key];
                Observer.target=null;
                
                //第一次初始化替换页面值
                // let newText= child.innerText.replace(`{{${key}}}`,this.vm[key])
                child.innerText=this.vm[key];
            }
        });
    }

}