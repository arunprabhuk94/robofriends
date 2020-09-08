import React from 'react';
import { shallow, mount, render } from "enzyme";
import CardList from './CardList';

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();   
})
