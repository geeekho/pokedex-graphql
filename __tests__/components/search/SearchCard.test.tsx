/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */

// Import necessary utilities
import { render, screen } from '@testing-library/react';
import SearchCard from '@/components/search/SearchCard';

jest.mock(
  'next/image',
  () =>
    ({
      src,
      alt,
      width,
      height,
    }: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }) =>
      <img src={src} alt={alt} width={width} height={height} />
);

describe('SearchCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the SearchCard with an image and SearchForm', () => {
    // Render the component
    render(<SearchCard />);

    // Check if the image is rendered correctly
    const image = screen.getByAltText('pokeball');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/pokeball.png');
    expect(image).toHaveAttribute('width', '50');
    expect(image).toHaveAttribute('height', '50');

    // Check if SearchForm is rendered as a child component
    const searchForm = screen.getByRole('form');
    expect(searchForm).toBeInTheDocument();
  });
});
