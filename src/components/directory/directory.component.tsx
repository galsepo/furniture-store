import { Key } from 'react';


import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};


const categories: DirectoryCategory[] = [
  {
    id: 101,
    title: 'living room',
    imageUrl: 'https://i.ibb.co/GMnGBH5/sofas.jpg',
    route: 'shop/livingrooms',
  },
  {
    id: 201,
    title: 'kitchen',
    imageUrl: 'https://i.ibb.co/PhFj76m/kitchen.jpg',
    route: 'shop/kitchen',
  },
  {
    id: 301,
    title: 'bedrooms',
    imageUrl: 'https://i.ibb.co/FXLvm7w/bedrooms.jpg',
    route: 'shop/bedrooms',
  },
  {
    id: 401,
    title: 'dining',
    imageUrl: 'https://i.ibb.co/djmJFK1/diningroom.jpg',
    route: 'shop/dining',
  },
  {
    id: 501,
    title: 'bathroom',
    imageUrl: 'https://i.ibb.co/KKLt7YS/bathroom.jpg',
    route: 'shop/bathroom',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>

      {categories.map((category) => (

        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
