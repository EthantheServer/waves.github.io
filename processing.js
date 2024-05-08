const programCode = (processingInstance) => {
  with (processingInstance) {
    size(400, 395);
    frameRate(30);
    background(255, 255, 255);
    // Code starts here
    angleMode = "radians";

    class Wave {
      constructor(amplitude, period, color) {
        this.startAngle = 0;
        this.amplitude = amplitude;
        this.period = period;
        this.color = color;
        this.angleVel = (TWO_PI / this.period) * 5;
      }

      update() {
        this.startAngle += TWO_PI / this.period;
      }

      draw() {
        let angle = this.startAngle;
        fill(this.color);
        for (let x = 0; x <= width; x += 19) {
          const y = this.amplitude * sin(angle);
          ellipse(x, y + height / 2, 42, 42);
          angle += this.angleVel;
        }
      }
    }

    const wave = new Wave(200, 175, color(255, 0, 0, 100));
    const wave1 = new Wave(126, width - 60, color(145, 230, 224));

    translate(0, height / 2);

    draw = () => {
      background(255);
      wave.update();
      wave.draw();
      wave1.update();
      wave1.draw();
    };

    // Code ends here
  }
};

const canvas = document.getElementById("mycanvas");

const processingInstance = new Processing(canvas, programCode);
