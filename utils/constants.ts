export const typeToColor: { [key: string]: string } = {
  grass: '#78C850', // Green
  fire: '#F08030', // Orange
  water: '#6890F0', // Blue
  electric: '#F8D030', // Yellow
  poison: '#A040A0', // Purple
  bug: '#A8B820', // Greenish Yellow
  normal: '#A8A878', // Beige
  fairy: '#EE99AC', // Light Pink
  ground: '#E0C068', // Brownish Yellow
  fighting: '#C03028', // Red
  psychic: '#F85888', // Pinkish Red
  rock: '#B8A038', // Light Brown
  ghost: '#705898', // Purple
  dragon: '#7038F8', // Purple Blue
  dark: '#705848', // Dark Gray
  steel: '#B8B8D0', // Steel Gray
  ice: '#98D8D8', // Light Blue
};

export const statShortcut: { [key: string]: string } = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
};

export enum DetailsTabsEnum {
  STATS = 'STATS',
  EVOLUTIONS = 'EVOLUTIONS',
  MOVES = 'MOVES',
}
