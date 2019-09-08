import React from 'react';
import { create } from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    // test('', () => {
    //     const component = create(<ProfileStatus status='You can do anything...' />);
    //     const instance = component.getInstance();
    //     expect(instance.props.status).toBe('You can do anything...');
    // });

    test('<span> should be displayed', () => {
        const component = create(<ProfileStatus status='You can do anything...' />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='You can do anything...' />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe('You can do anything...');
    });

    // test('callback should be called', () => {
    //     const mockCallback = jest.fn();
    //     const component = create(<ProfileStatus status='You can do anything...' updateUserStatus={mockCallback} />);
    //     const instance = component.getInstance();
    //     instance.deActivateEditMode();
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });
});