//only without util functions
// import { render, screen } from '@testing-library/react';
import { render, screen } from '../../test-utils';
import { MuiMode } from './MuiMode';
// import { AppProviders } from '../../providers/app-providers';

describe('MuiMode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />);
        //next line only if without utils functions
        // render(<MuiMode />, { wrapper: AppProviders });
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    });

    test('renders text in white color for dark mode', () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
    });
});
