class MNote extends Module {
   constructor(x,y) {
      super(x,y,32,32)
      this.frequenceIn = canvas.fabric.createConnector(ConnectorIn,"hey",32,0,this);
      this.frequenceOut = canvas.fabric.createConnector(ConnectorOut,"hey",32,16,this);
      this.values = [0,0]
      this.color = color(0, 255, 153)
   }
  
  update() {
    if (this.frequenceIn.hasOutput()) {
      this.frequenceOut.set(this.frequenceIn.get());
    } else {
      this.frequenceOut.set(100);
    }
    
  }
  
}