class MComposerConst extends Module {
  constructor(x, y) {
    super(x, y, 64, 16)
    this.color = color(255, 204, 0)
    this.osc = new p5.Oscillator()
    this.osc.setType('sine')
    this.osc.start();
    this.n = canvas.fabric.createConnector(ConnectorIn,"hey",this.w + 16,0,this);
    this.n.value = 0;
 

  }

  
  update() {
    if (this.n.hasOutput()) {
        //this.osc.start()
        this.osc.amp(1)
        this.osc.freq(map(this.n.get(),0,100,0,800));  
    } else {
        //this.osc.stop()
        this.osc.amp(0)
    }
  }

}