import Component from "./components/Component.js";

class App {
	#html = null;

	constructor(id) {
		const DOMApp = document.getElementById(id);
		if (!DOMApp) {
			throw new Error('Element not found!');
		}
		this.#html = DOMApp;
	}

  add(component) {
    if (component instanceof Component) {
      this.#html.appendChild(component.html);
    }
    return this;
	}
}

export default App;
