import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('</App>', () => {
    test('App should mount without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div);
    });

    test('App should render without errors', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
})
