const template = document.createElement("template")
template.innerHTML = `
<style>

*:where(.ui) {
  --shade-color: var(--accent-color);
  background: none;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: var(--border-r);
  padding: 1rem 1.4em;
  text-decoration: none;
  padding: var(--btn-padding-h) var(--btn-padding-v);
  background-color: var(--white); 
  color: var(--text-secondary);
  border: none;
  box-shadow: 0px .3em 0px var(--shade-color),
              0px .2em 16px var(--non-bg);
  width: fit-content;
  margin-bottom: 3em; 

  justify-self: center;
}
</style>
<button class="ui"><slot></slot></button>
`


class uiButton extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.append(template.content.cloneNode('true'))
    // template.buttonTheme = 'danger';
    // template.innerHTML = `<button class="ui ${this.buttonTheme}">${this.innerText}</button>`
  }
}

customElements.define("ui-button", uiButton)
