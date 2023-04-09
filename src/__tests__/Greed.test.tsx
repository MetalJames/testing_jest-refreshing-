import { render, screen } from '@testing-library/react'
import Greed from "../components/Greed/Greed"

test('greed renders correctly, first test', () => {
    render(<Greed />)
    const textElement = screen.getByText(/greed/i);
    expect(textElement).toBeInTheDocument();
})

// greet should rnder hello and if name is passed into the component
// it should render hello followed by component

test('greed renders correctly, second test', () => {
    render(<Greed />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument();
})

test('greet render with a name', ()=> {
    render(<Greed name='Volodymyr' />)
    const textElement = screen.getByText(/hello volodymyr/i)
    expect(textElement).toBeInTheDocument()
})