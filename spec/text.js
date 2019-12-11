import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/client/components/App.jsx';
import Menu from '../src/client/components/Menu.jsx';
import SingleItem from '../src/client/components/SingleItem.jsx';
import { mount, shallow, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should be selectable by class "app"', function() {
    let wrapper = shallow(<App />);
    expect(wrapper.is('.app')).toBe(true);
  });

  it('has proper initial states', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.state('view')).toBe('dinner');
    expect(wrapper.state('postData')).toBe([]);
  });

  it('renders one Menu component', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(Menu)).to.have.lengthOf(1);
  });

  it('renders one SingleItem component, () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(SingleItem)).to.have.lengthOf(1);
  });
});


describe('Menu component', () => {
  it('has been rendered', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('.list')).to.have.lengthOf(1);
  });



