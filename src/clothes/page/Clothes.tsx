import React, { useEffect, useState } from 'react';

// type Products = {
//   category: string;
//   description: string;
//   id: string;
//   image: string;
//   options: string;
//   price: number;
//   title: string;
// };

const Clothes: React.FC = () => {
  const [products, setProducts] = useState<unknown[] | undefined>();

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        const datas = Object.entries(data);
        setProducts(datas);
        console.log(products);
      })
      .catch(err => console.log(err));
  }, []);

  const productList = products?.map((product: any, index) => {
    return (
      <li key={index}>
        <img src={product.image} alt='image' />
      </li>
    );
  });

  return <div>{productList}</div>;
};

export default Clothes;
