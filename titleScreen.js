function titleScreen() {
  textAlign(CENTER, CENTER);
  // 40px
  textSize(45);
  // Color for shapes
  fill(255);
  text("Fun game", windowWidth / 2, windowHeight / 3);
  // Make it 2/3 of the way down the screen
  text("Click to start", windowWidth / 2, (windowHeight * 1.5) / 3);

  if (mouseIsPressed) {
    game_running = true;
  }
}
