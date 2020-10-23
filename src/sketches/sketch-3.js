export default function (s) {
  s.state = {}
  s.dispatch = () => { }

  s.setup = () => {
    s.createCanvas(710, 400);
    s.background(0);
    s.strokeWeight(20);
    s.frameRate(2);
  }
  
  s.draw = () => {
    for (let i = 0; i < s.width; i++) {
      let r = s.random(255);
      s.stroke(r);
      s.line(i, 0, i, s.height);
    }
  }
}