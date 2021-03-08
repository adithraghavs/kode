class Kode {
  constructor(mount) {
    this.mount = document.querySelector(mount);
    this.l = [];
    this.qux = "";
  }
  render(app) {
    // console.log(Object.keys(app), Object.values(app));
    for (var i = 0; i < Object.keys(app).length; i++) {
      this.log(i)
      this.key = Object.keys(app).find(
        (key) => app[key] === app[Object.keys(app)[i]]
      );

      this.value = app[Object.keys(app)[i]];

      if (typeof this.value == "object") {
        for (var j = 0; j < Object.keys(this.value).length; j++) {
          this.foo = Object.keys(this.value)[j];
          this.mount.innerHTML = `<${this.key}>${
            this.value["text"] ? this.value["text"] : this.qux
          }</${this.key}>`;
          this.l.push(this.foo);
        }
      } else {
        this.mount.innerHTML = this.mount.innerHTML + `<${this.key}>${this.value}</${this.key}>`;
      }
      this.l.forEach((x) => {
        eval(
          `document.querySelector('${this.key}').style.${x} = '${this.value[x]}';`
        );
      });
    }
  }

  
  
  log(msg) {
    // console.log(msg);
  }
}
