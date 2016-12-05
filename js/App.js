import Mediator from './Mediator';

// Facade
class App {
  constructor(mediator) {
    this.button = document.getElementById("button");
    this.spinner = document.getElementById("spinner");

    this.button.addEventListener('click', this.run.bind(this));

    this.mediator = mediator;
  }

  run() {
    this.button.className = "hidden";
    this.spinner.className = "spinner";

    this.mediator.loadData()
      .then(() => this.mediator.render());
  }
}

export default App;