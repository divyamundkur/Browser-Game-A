let BACKGROUND, BUZZ_CHARACTER, FONT;
let game_running = false;
let vals;

// Will run this before beginning
function preload() {
  centerOfScreen = [windowWidth / 2, windowHeight / 2];
  BACKGROUND = loadImage("images/space_background.jpg");
  BUZZ_CHARACTER = loadImage("images/GT_BUZZ.png");
  // loadSound()
  // loadFont()
}

// Will run once
function setup() {
  createCanvas(windowWidth, windowHeight);
  BACKGROUND.resize(windowWidth, windowHeight);
  buzz = new Buzz();
  // BACKGROUND.resize(windowWidth, windowHeight);
  // Set frame rate of game
  frameRate(25);
}

// Will continue to reload
function draw() {
  // Places image at top left corner
  image(BACKGROUND, 0, 0);
  // Start game screen, waits for user click to start
  if (!game_running) {
    titleScreen();
  } else {
    play();
  }
}

function play() {
  text("We are now playing", centerOfScreen[0], centerOfScreen[1]);
  // Player
  buzz.show();
  // Enemy
}
