import { render, screen } from '@testing-library/react'
import Greed from "../components/Greed/Greed"

test('greed renders correctly', () => {
    render(<Greed />)
    const textElement = screen.getByText('Greed');
    expect(textElement).toBeInTheDocument();
})