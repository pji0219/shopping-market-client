import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Product } from '../../common/types/products';
import Products from '../../common/components/products/Products';
import { AppDispatch } from '../../store';
import { productsActions } from '../../store/slice/products';
import { RootState } from '../../store';

const data: Product[] = [
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '13',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '14',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '15',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '16',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '17',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '18',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '19',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '20',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '21',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '22',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '23',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '24',
    image: '/image/2.jpg',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: 80000,
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
];

const Clothes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(productsActions.getProducts(data));
  }, [dispatch]);

  return <Products products={products} />;
};

export default Clothes;
