import React from 'react';
import ReactDom from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Example from '../Example';

describe('Example', function() {
	let example;

	beforeEach(() => {
		
	});

	it('should exists', () => {
		example = ReactTestUtils.renderIntoDocument( <Example /> );
		expect(ReactTestUtils.isCompositeComponent(example)).toBeTruthy();
	});

	it('should return an HTML heading containing "Hello World!" text', () => {
		const renderer = new ShallowRenderer;
		renderer.render(<Example />);
		example = renderer.getRenderOutput();

		expect(example.props.children).toEqual(<h1>Hello World!</h1>);
	});
});