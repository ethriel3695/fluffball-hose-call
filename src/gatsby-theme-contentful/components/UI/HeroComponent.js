import React from 'react';
import Image from 'gatsby-image';

const HeroComponent = ({ sect }) => {
  return (
    <div className="max-w-full">
      <Image fluid={sect.image.fluid} />
    </div>
  );
};

export default HeroComponent;
