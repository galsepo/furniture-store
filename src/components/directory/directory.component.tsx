import { FC, Key } from 'react';


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
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    route: 'shop/living%20rooms',
  },
  {
    id: 201,
    title: 'kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    route: 'shop/kitchen',
  },
  {
    id: 301,
    title: 'bedrooms',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    route: 'shop/bedrooms',
  },
  {
    id: 401,
    title: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    route: 'shop/dining',
  },
  {
    id: 501,
    title: 'bathroom',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661956103157-556678e6dafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
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
