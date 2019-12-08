class MSlider extends Module {
  constructor(x, y) {
    super(x, y, 32, 32);
    this.max = this.w;
    this.value = 1;
    this.xOffset = 0
    this.yOffset = 64
    this.color = color(255, 102, 153)
    this.grabbed = false
    this.floatOut = canvas.fabric.createConnector(ConnectorOut, "hey", 32, 0, this);
  }

  update() {
    let posX = this.x + this.value + this.xOffset;
    let posY = this.y + this.yOffset;
    let distance = dist(posX, posY, mouseX, mouseY);

    if (mouseIsPressed && mouseButton == LEFT) {
      if (distance < 10 && dragging == false) {
        this.grabbed = true;
      }
    } else {
      this.grabbed = false;
      dragging = false;
    }

    if (this.grabbed) {
      this.dragging = true;
      this.value = mouseX - (this.x + this.xOffset);
    }

    this.value = constrain(this.value, 0, this.max);
    
    
    this.floatOut.set(map(this.value, 0, this.max, 0, 100));
  }

  drawSlider() {
    let posX = this.x + this.xOffset;
    let posY = this.y + this.yOffset;
    stroke(0)
    line(posX, posY, posX + this.max, posY);
    if (this.grabbed) {
      fill(this.color);
    } else {
      fill(255);
    }
    ellipse(posX + this.value, posY, 10, 10);
  }

}