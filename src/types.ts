export type CategoryType = 
  | 'all'
  | 'identity' // Аватарка, Банер, Логотип
  | 'art' // Арти кольорові
  | 'sketch' // Скетчі
  | 'background' // Фони
  | 'character' // Персонаж, Маскот
  | 'stickers' // Стікери звичайні
  | 'animation'; // Анімації та анім. стікери

export interface ProductItem {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  price: number | null; // null for custom / договірна
  priceLabel: string;
  url: string;
  description: string;
  isPopular?: boolean;
  isNew?: boolean;
  features?: string[];
}
