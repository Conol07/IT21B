class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
      this.name = name;
      this.color = color;
      this.bloomSeason = bloomSeason;
      this.isFragrant = isFragrant;
    }
  
    bloom() {
      console.log(`The ${this.name} blooms in ${this.bloomSeason}.`);
      document.getElementById("output").innerHTML += `<p>The ${this.name} blooms in ${this.bloomSeason}.</p>`;
    }
  
    fragrance() {
      let message = this.isFragrant ? "is" : "is not";
      console.log(`The ${this.name} ${message} fragrant.`);
      document.getElementById("output").innerHTML += `<p>The ${this.name} ${message} fragrant.</p>`;
    }
  
    colorDisplay() {
      console.log(`The ${this.name} has a beautiful ${this.color} color.`);
      document.getElementById("output").innerHTML += `<p>The ${this.name} has a beautiful ${this.color} color.</p>`;
    }
  }
  let rose = new Flower("Rose", "red", "Spring", true);
  rose.bloom();
  rose.fragrance();
  rose.colorDisplay();