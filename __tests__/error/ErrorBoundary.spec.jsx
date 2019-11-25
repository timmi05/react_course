import React from 'react';
import { shallow } from 'enzyme'
import { ErrorBoundary } from "../../src/error/ErrorBoundary";

describe('ErrorBoundary rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ErrorBoundary/>);
        expect(component).toMatchSnapshot();
    });
});
