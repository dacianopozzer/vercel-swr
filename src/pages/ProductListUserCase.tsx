import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';
import { Product } from '../types/Product';

const ProductList: React.FC = () => {
  const { data } = useFetch<Product[]>('products');

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
        <h1>LISTA DE PRODUTOS</h1>
        <ul>
        {data.map(product => (
            <div>
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                    <p>{product.brand} - {product.price}</p>
                </li>
            </div>
        ))}
        </ul>
    </div>
  );
}

export default ProductList;