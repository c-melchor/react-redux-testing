import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

describe('<CommentBox/>', () => {
    it('has a text area and button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });
});

describe('the text area', () => {
    //need to use beforeEach in order to do this before each test
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        //assertion to make sure value in text area w/enzyme
        //first find element, then find prop 'value', then what should be there
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });

    it('allows users to type and submit, clearing text area', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});


