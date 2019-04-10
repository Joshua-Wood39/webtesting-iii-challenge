import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from '../dashboard/Dashboard.js';
import TestRenderer from 'react-test-renderer';


describe('Display Snap', () => {
    it('matches snap', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Gate Functions', () => {
    it('defaults to Open/Unlocked', () => {
        const { getByText } = render(<Dashboard />);

        getByText('Opened');
        getByText('Unlocked');
    })

    

    it('closes the gate', () => {
        const { getByText } = render(<Dashboard />);

        const button = getByText('Close Gate');
        fireEvent.click(button);

        getByText('Closed');
    })

    it('locks the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const lockButton = getByText('Lock Gate');
        fireEvent.click(lockButton);

        getByText('Locked');
    })
    
    it('unlocks the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const lockButton = getByText('Lock Gate');
        fireEvent.click(lockButton);
        const unlockButton = getByText('Unlock Gate');
        fireEvent.click(unlockButton);

        getByText('Unlocked');
    })

    it('opens the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const openButton = getByText('Open Gate');
        fireEvent.click(openButton);

        getByText('Opened');
        
    })
})

