class Module extends Element {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.dragged = false;
  }
  drag() {
    if (mouseIsPressed && mouseButton == LEFT) {
      if (this.pointIn(mouseX, mouseY) && !dragging) {
        this.dragged = true;
      }
    } else {
      this.dragged = false;
      dragging = false;
    }

    if (this.dragged) {
      if (keyIsPressed && key == 'SHIFT') this.remove()
      this.x = mouseX - this.w / 2;
      this.y = mouseY - this.h / 2;
      dragging = true;
    }
    
    if (this.x + this.w > canvas.x+canvas.w) this.x = canvas.x+canvas.w-this.w
    if (this.x < canvas.x) this.x = canvas.x
    if (this.y + this.h > canvas.y+canvas.h) this.y = canvas.y+canvas.h-this.h
    if (this.y < canvas.y) this.y = canvas.y
    
    fill(100)
    textSize(10)
    noStroke()
    text(this.constructor.name,this.x,this.y - 2)
  }
  update(){}
}