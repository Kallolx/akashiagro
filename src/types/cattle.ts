export type CattleType = 'Bull' | 'Cow' | 'Calf';
export type CattleBreed = 'Brahman' | 'Sahiwal' | 'Holstein Friesian' | 'Indigenous';

export interface Cattle {
  id: string;
  name: string;
  type: CattleType;
  breed: CattleBreed;
  age: number; // in months
  weight: number; // in KG
  price: number;
  description: string;
  images: string[];
  featured?: boolean;
  available: boolean;
  location: string;
} 