class Kode {
  constructor(mount) {
    this.mount = document.querySelector(mount);
  }
  render(app) {
    for (var i = 0; i < Object.keys(app).length; i++) {
      this.key = Object.keys(app).find(
        (key) => app[key] === app[Object.keys(app)[i]]
      );
      this.foo =''  
      this.value = app[Object.keys(app)[i]];
     
      if (typeof this.value == "object") {
        for (var j = 0; j < Object.keys(this.value).length; j++) {
          this.foo =  this.foo + Object.keys(this.value).find(
            (key) => this.value[key] === this.value[Object.keys(this.value)[j]]
          );
        //   console.log('hola amigo', this.value[this.foo])
          
          if (this.value["id"]) {
            this.mount.innerHTML = `<${this.key} id="${this.value['id']}">${this.value["text"]}</${this.key}>`;
          } else {
            if (this.value['text']) {
    
                this.mount.innerHTML = `<${this.key} style="${this.foo}: ${this.value[this.foo]}">${this.value["text"]}</${this.key}>`;
            } else {
          
                this.mount.innerHTML = `<${this.key}></${this.key}>`;
            }
          }
          eval(
            `document.querySelector('${this.key}').style.${this.foo} = '${
              this.value[this.foo]
            }'`
          );
        }
      } else {
        this.mount.innerHTML = `<${this.key}>${this.value}</${this.key}>`;
      }
    }
  }
}
