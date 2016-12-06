// Facade & controller
class App {
  constructor(mediator) {
    this.button = document.getElementById("button");
    this.spinner = document.getElementById("spinner");

    this.mediator = mediator;
  }

  index() {
    this.button.className = "hidden";
    this.spinner.className = "spinner";

    this.mediator.loadData()
      .then(() => this.mediator.render());
  }

  run() {
    this.button.addEventListener('click', this.index.bind(this));
  }
}

export default App;