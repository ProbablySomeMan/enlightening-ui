class uiButton extends HTMLElement {
  constructor() {
    super()
    this.buttonTheme = 'danger';
    this.innerHTML = `<button class="ui ${this.buttonTheme}">${this.innerText}</button>`
  }
}

customElements.define("ui-button", uiButton)
