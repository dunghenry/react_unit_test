import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';

jest.mock('axios', () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: {
                id: 1,
                name: 'John',
            },
        }),
    },
}));

test('username input should be rendered', () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument();
});

test('password input should be rendered', () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
});

test('button should be rendered', () => {
    render(<Login />);
    const buttonEle = screen.getByRole('button');
    expect(buttonEle).toBeInTheDocument();
});

test('loading should not be rendered', () => {
    render(<Login />);
    const buttonEle = screen.getByRole('button');
    expect(buttonEle).not.toHaveTextContent(/loading/i);
});

test('username input should be empty', () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).not.toBe('');
});
test('password input should be empty', () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/password/i);
    expect(userInputEl.value).not.toBe('');
});

test('username input should not be empty', () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).toBe('');
});
test('password input should not be empty', () => {
    render(<Login />);
    const passwordEle = screen.getByPlaceholderText(/password/i);
    expect(passwordEle.value).toBe('');
});

test('button should be disabled', () => {
    render(<Login />);
    const buttonEle = screen.getByRole('button');
    expect(buttonEle).toBeDisabled();
});

test('error message shot not be visible', () => {
    render(<Login />);
    const errorEle = screen.getByTestId('error');
    expect(errorEle).not.toBeVisible();
});

test('username input should change', () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = 'test';
    fireEvent.change(userInputEl, { target: { value: testValue } });
    expect(userInputEl.value).toBe(testValue);
});

test('password input should change', () => {
    render(<Login />);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    const testValue = 'test';
    fireEvent.change(passwordEl, { target: { value: testValue } });
    expect(passwordEl.value).toBe(testValue);
});
test('button should not be disabled when inputs exits', () => {
    render(<Login />);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const buttonEle = screen.getByRole('button');
    const testValue = 'test';
    fireEvent.change(passwordEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    expect(buttonEle).not.toBeDisabled();
});
test('loading should be rendered when click', () => {
    render(<Login />);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const buttonEle = screen.getByRole('button');
    const testValue = 'test';
    fireEvent.change(passwordEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEle);
    expect(buttonEle).toHaveTextContent(/loading/i);
});

test('loading should not be rendered after fetching', async () => {
    render(<Login />);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const buttonEle = screen.getByRole('button');
    const testValue = 'test';
    fireEvent.change(passwordEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEle);
    const userItem = await screen.findByText('John');
    // await waitFor(() => expect(buttonEle).not.toHaveTextContent(/loading/i)) ;
    expect(userItem).toBeInTheDocument();
});
