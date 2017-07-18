import exampleComponent from './components/Example/Example.js';

function componentDiv() {
	const cDiv = document.createElement('div');
	cDiv.innerHTML = exampleComponent();

	return cDiv;
}

document.body.appendChild(componentDiv());