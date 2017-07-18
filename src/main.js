import exampleComponent from './components/Example/Example.js';

function componentDiv() {
	var cDiv = document.createElement('div');
	cDiv.innerHTML = exampleComponent();

	return cDiv;
}

document.body.appendChild(componentDiv());
