// __tests__/SearchForm.test.tsx
import SearchForm from '@/components/search/SearchForm';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { redirect } from 'next/navigation';

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('SearchForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form with an input and buttons', () => {
    render(<SearchForm />);

    // Check if the input and buttons are present in the document
    expect(screen.getByPlaceholderText('Diglett')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /random/i })).toBeInTheDocument();
  });

  it('should submit the form and redirect to the correct Pokémon page', async () => {
    render(<SearchForm />);

    const input = screen.getByPlaceholderText('Diglett');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Pikachu' } });
    });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(redirect).toHaveBeenCalledWith('/pikachu');
    });
  });

  it('should disable the submit button if form is invalid', async () => {
    render(<SearchForm />);

    const submitButton = screen.getByRole('button', { name: /Submit/i });

    expect(submitButton).toBeDisabled();

    const input = screen.getByPlaceholderText('Diglett');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Pikachu' } });
    });

    expect(submitButton).toBeEnabled();
  });

  it('should trigger random Pokémon redirection when the "Random" button is clicked', async () => {
    render(<SearchForm />);

    const randomButton = screen.getByRole('button', { name: /Random/i });

    await act(async () => {
      fireEvent.click(randomButton);
    });

    await waitFor(() => {
      expect(redirect).toHaveBeenCalledTimes(1);
    });
  });

  it('should show an error if the input is invalid', async () => {
    render(<SearchForm />);

    const input = screen.getByPlaceholderText('Diglett');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Pik' } });
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Pokemon name is too short/i)
      ).toBeInTheDocument();
    });
  });
});
