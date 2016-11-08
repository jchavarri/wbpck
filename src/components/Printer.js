export default class Printer {
  constructor(selector) {
    this.el = document.querySelector(selector)
    this.el.innerHTML = 'Webpack Babel';
  }
}
