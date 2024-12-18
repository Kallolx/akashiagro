export type CattleType = 'Bull' | 'Cow';
export type CattleBreed = 'Brahman' | 'Jersey' | 'Sahiwal' | 'Holstein Friesian' | 'Indigenous';

export interface Cattle {
  id: string;
  name: string;
  type: CattleType;
  breed: CattleBreed;
  age: number;
  weight: number;
  price: number;
  location: string;
  description: string;
  image: string;
  featured: boolean;
  isAvailable?: boolean;
} 