export type Product = {
  category: string;
  description: string;
  id: string;
  image: string;
  options: string[];
  price: number;
  title: string;
};

// state
export type ProductData = Product[] | undefined;

// map 돌릴 state
export type ProductItems = {
  products: Product[] | undefined;
};

// 프로덕트 카드 props
export type Props = {
  product: Product;
};
