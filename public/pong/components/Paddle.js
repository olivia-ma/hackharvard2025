class Paddle {
  static highscorepong = 0;
  constructor({ x, y, trackHighScore = false }) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.cumulativeScore = 0;
    this.speed = 100;
    this.movement = DIRECTION.IDLE;
    this.trackHighScore = trackHighScore;
  }

  addScore() {
    this.score += 1;
    this.cumulativeScore += 1;
    if (this.trackHighScore && this.cumulativeScore > Paddle.highscorepong) {
      Paddle.highscorepong = this.cumulativeScore;
    }
  }

  resetScore() {
    this.score = 0;
  }

  getCumulativeScore() {
    return this.cumulativeScore;
  } 

  getHighscore() {
    return Paddle.highscorepong;
  } 

  getScore() {
    return this.score;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  draw(context) {
    context.fillStyle = COLOURS.WHITE;

    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
