import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Products from '../../common/components/products/Products';
import { Product } from '../../common/types/products';
import { AppDispatch, RootState } from '../../store';
import { productsActions } from '../../store/slice/products';

const data: Product[] = [
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '1',
    image: 'image/3.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '2',
    image: 'image/3.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '3',
    image: 'image/3.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '4',
    image: 'image/3.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '5',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '6',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '7',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '8',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '9',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '10',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '11',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '12',
    image: 'image/1.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
];

const Electronics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(productsActions.getProducts(data));
  }, []);

  return <Products products={products} />;
};

export default Electronics;
