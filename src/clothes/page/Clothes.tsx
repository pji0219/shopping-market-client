import React, { useEffect, useState } from 'react';

import { Product, ProductData } from '../../common/types/products';
import Products from '../../common/components/Products';

const data: Product[] = [
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '1',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '2',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '3',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '4',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '5',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '6',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '7',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '8',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '9',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '10',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '11',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '12',
    image: 'image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
];

const Clothes: React.FC = () => {
  const [products, setProducts] = useState<ProductData>();

  useEffect(() => {
    setProducts(data);
  }, []);

  return <Products products={products} />;
};

export default Clothes;
