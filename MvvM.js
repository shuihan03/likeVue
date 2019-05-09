class MvvM {
    constructor({
        el,
        data
    }) {
        this.data = data;
        this.defineData(data);
        let compile = new Complie(el, this);
        compile.comipleHtml();
    }

    defineData(data) {
            Object.keys(data).forEach(item => {
                    let observe = new Observer();
                    Object.defineProperty(this, item, {
                            configurable: false,
                            enumerable: true,
                            get: function () {
                                Observer.target && observe.addWatcher(Observer.target);
                                return this.data[item];
                            },
                            set: function (val) {
                                this.data[item] = val;
                                observe.updatePageData(val);
                            }

                        })


                    
                })
            }
            }