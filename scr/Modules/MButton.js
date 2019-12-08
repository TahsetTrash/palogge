class MButton extends Module {
   constructor(x,y) {
      super(x,y,32,16)
      this.color = color(102, 102, 255)
      this.active = true;
      this.out = canvas.fabric.createConnector(ConnectorOut,"hey",32,15,this);
   }
  
  update() {
      this.out.set(true);
  }
}