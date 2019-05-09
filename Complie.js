
class Complie{
    constructor(el,vm){
    this.vm=vm;
    this.dom=  document.querySelector(el);
    
    }
   /**
    * 初始化加载页面所有节点，将需要更新的节点创建观察者对象，并存储到观察者列表
    */
    comipleHtml(){
       Array.from(this.dom.children).forEach(child => {
            
            if(/\{\{(.*)\}\}/.test(child.outerHTML)){
                let key = RegExp.$1.trim()
                //通过添加观察者指向，然后调用data的get重写方法，将watcher添加到Observer
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