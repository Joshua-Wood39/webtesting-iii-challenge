import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from '../dashboard/Dashboard.js';


describe('Controls Snap', () => {
    it('matches snap', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Gate Functions', () => {
    it('defaults to Open/Unlocked', () => {
        const { getByText } = render(<Dashboard />);

        getByText('Close Gate');
        getByText('Lock Gate');
    })

    it('lock gate button disabled', () => {
        const { getByText } = render(<Dashboard />);

        const myButton = getByText('Lock Gate');
        expect(myButton).toHaveProperty('disabled', true);
    })

    it('closes the gate', () => {
        const { getByText } = render(<Dashboard />);

        const button = getByText('Close Gate');
        fireEvent.click(button);

        getByText('Open Gate');
    })

    it('locks the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const lockButton = getByText('Lock Gate');
        fireEvent.click(lockButton);

        getByText('Unlock Gate');
    })

    it('open gate button disabled', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const lockButton = getByText('Lock Gate');
        fireEvent.click(lockButton);

        const myButton = getByText('Open Gate');
        expect(myButton).toHaveProperty('disabled', true);
    })
    
    it('unlocks the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const lockButton = getByText('Lock Gate');
        fireEvent.click(lockButton);
        const unlockButton = getByText('Unlock Gate');
        fireEvent.click(unlockButton);

        getByText('Lock Gate');
    })

    it('opens the gate', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText('Close Gate');
        fireEvent.click(closeButton);
        const openButton = getByText('Open Gate');
        fireEvent.click(openButton);

        getByText('Close Gate');
        console.log(document.body.outerHTML)
    })
})


