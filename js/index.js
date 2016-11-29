const button = document.getElementById("button");
const spinner = document.getElementById("spinner");

const main = () => {
  require.ensure(['babel-polyfill', 'whatwg-fetch'], () => {
    require('babel-polyfill');
    require('whatwg-fetch');
    require('../css/app.scss');

    button.className = "hidden";
    spinner.className = "spinner";

    const getData = require('./fetch').getData;

    getData();
  });
};

button.onclick = main;
