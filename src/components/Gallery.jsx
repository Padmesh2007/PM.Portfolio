import React from 'react';
import InfiniteMenu from './InfiniteMenu';

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 relative z-10 bg-bgPrimary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16 text-center">
        <div className="text-accentRed text-sm font-bold tracking-widest uppercase mb-4 reveal">Gallery</div>
        <h2 className="text-4xl md:text-6xl font-black text-white reveal delay-1">Explore Visuals</h2>
      </div>
      
      <div className="w-full max-w-7xl mx-auto reveal delay-2" style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items}/>
      </div>
    </section>
  );
};

export default Gallery;
