class Buzz {
  constructor() {
    this.x = 150;
    this.y = height - 150;
    this.r = 100;
    this.vx = 0;
    this.vy = 0;
  }

  show() {
    image(BUZZ_CHARACTER, this.x, this.y, this.r, this.r);
  }
}
