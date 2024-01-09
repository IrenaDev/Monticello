class Component {
	#html = null;

	constructor(tagName, classes = '', id) {
		this.#html = this.createElement(tagName, classes, id);
		console.log(this.#html);
	}

	get html() { 
		return this.#html;
	}

	createElement(tagName, classes, id) {
		const newTag = document.createElement(tagName);
		newTag.className = classes;
		id && (newTag.id = id);
		return newTag;
	}

	//add child(){}

	// createSection() {
	//   let section = document.createElement('section');
	//   section.className = this.sectionClass;
	//   section.id = this.sectionId;
	// }

	// createContainer() {
	//   // Container
	//   let container = document.createElement('div');
	//   container.className = 'container';

	//   // Row
	//   let row = document.createElement('div');
	//   container.className = 'row';

	//   return container.appendChild(row);
	// }

	// createIntro() {
	//   // Intro container
	//   const intro = document.createElement('div');
	//   container.className = 'intro';

	//   // Intro container
	//   const introTitle = document.createElement('h2');
	// 	container.className = 'intro__title';

	// 	 return intro.appendChild(introTitle);
	// }
}

export default Component;
