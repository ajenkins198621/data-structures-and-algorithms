
/**
 * @jest-environment jsdom
 */


import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/react';
import ReactDebounceExample from './ReactDebounceExample';

// describe('ReactDebounceExample', () => {
//     it('should type a message but only do one console log', async () => {

//         render(<ReactDebounceExample />);
//         const user = userEvent.setup()

//         const input = screen.getByPlaceholderText('test input');
//         user.type(input, 'Hello World');

//         const debounceCount = screen.getByText(/Debounce Count: 1/i);
//         expect(debounceCount).toBeInTheDocument();
        
//     });
// });