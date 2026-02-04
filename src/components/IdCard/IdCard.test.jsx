import React from 'react';
import { render, screen } from '@testing-library/react';
import IdCard from './IdCard/IdCard';

describe('IdCard', () => {
  it('renders first and last name', () => {
    render(
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    );
    expect(screen.getByText(/First name:/)).toBeInTheDocument();
    expect(screen.getByText(/Last name:/)).toBeInTheDocument();
  });
});
