export interface Product {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  stock: number;
  isFavorite?: boolean;
}
