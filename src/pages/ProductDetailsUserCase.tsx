import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Product } from '../types/Product';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useFetch<Product>(`products/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>DETALHES DO PRODUTO</h1>
      <ul>
        <li>ID: {data?.id}</li>
        <li>NAME: {data?.name}</li>
        <li>BRAND: {data?.brand}</li>
        <li>PRICE: {data?.price}</li>
      </ul>
    </div>
  );
}

export default ProductDetails;