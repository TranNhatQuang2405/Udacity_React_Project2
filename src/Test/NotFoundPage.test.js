import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from 'Layout';

describe('NotFoundPage', () => {
    it('renders the correct content', () => {
        render(<NotFoundPage />);

        const bodyElement = screen.getByText("404 - Page Not Found");

        expect(bodyElement).toBeInTheDocument();
    });
});