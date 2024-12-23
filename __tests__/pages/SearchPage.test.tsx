import SearchPage from '@/app/(search)/page';
import { render, screen } from '@testing-library/react';

jest.mock('@/components/search/SearchCard.tsx', () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="search-card">SearchCard</div>), // Mock SearchCard
  };
});

describe('SearchPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the SearchCard component', () => {
    render(<SearchPage />);

    // Ensure the SearchCard is rendered
    const searchCard = screen.getByTestId('search-card');
    expect(searchCard).toBeInTheDocument();
    expect(searchCard).toHaveTextContent('SearchCard'); // The mock should render "SearchCard"
  });

  it('should have the correct background image style', () => {
    render(<SearchPage />);

    // Check if the background image is set correctly in the inline style
    const mainElement = screen.getByRole('main'); // The <main> element
    expect(mainElement).toHaveStyle(
      'background-image: url("/assets/bg-search.png");'
    );
  });
});
