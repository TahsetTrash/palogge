class MRandom extends Module {
   constructor(x,y) {
      super(x,y,32,16);
      this.color = color(255, 102, 153)
      this.floatOut = canvas.fabric.createConnector(ConnectorOut,"hey",32,0,this);
   }
  
  update() {
      this.floatOut.set(random(0,100));
  }
  
}