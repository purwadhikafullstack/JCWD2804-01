import React from 'react';
import Search from '../components/search';
import Card from '../components/card';

import CarouselComp from '../components/carousel';

const page = () => {
  return (
    <div>
      <CarouselComp />
      <Search />
      <Card />
    </div>
  );
};

export default page;
