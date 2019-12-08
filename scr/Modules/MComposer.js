class MComposer extends Module {
  constructor(x, y) {
    super(x, y, 64, 16)
    this.color = color(255, 204, 0)
    this.osc = new p5.Oscillator()
    this.osc.setType('sine')
    this.osc.amp(1);
    this.envelope = new p5.Envelope()
    this.envelope.setADSR(0.001, 0.5, 0.1, 0.5)
    this.envelope.setRange(1, 0)
    this.osc.start()
    
    for (let i = 0; i < 10; i++) {
      let n = canvas.fabric.createConnector(ConnectorIn,"hey",this.w + i *16,0,this);
      n.value = 0;
    }
    this.index = 0;
  }

  getNotes() {
    let newNotes = []
    let notes = canvas.getElementByClass(ConnectorIn.name);
    for (let i = 0; i < notes.length; i++) {
      let n = notes[i]
      if (n.module == this) {
        newNotes.push(n);
      }
    }
    return newNotes;
  }

  update() {
    let notes = this.getNotes()
    this.time += 1;
    this.index = this.index % notes.length
    if (frameCount % 10 == 0 || frameCount == 1) {
      if (notes[this.index].output != null) 
      {
        if (notes[this.index].value > 0) 
        {
          
          this.osc.freq(map(notes[this.index].get(),0,100,0,800));
          this.envelope.play(this.osc, 0, 0.1);
        }
      }
      this.index++;
    }
  }

}