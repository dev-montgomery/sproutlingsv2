import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import Content from '../components/Content';

const Home = ({ microgreens }) => {

  const [content, setContent] = useState(null);

  const updateContent = content => {
    content ? setContent(content) : setContent(null);
  };

  const products = Object.keys(microgreens).map((key, index) => {
    const microgreen = microgreens[key];
    return (
      <li key={index} id={key} className="products">
        <Card
          updateContent={updateContent}
          name={microgreen.name}
          description={microgreen.description}
          diet={microgreen.diet}
          benefits={microgreen.benefits}
          availability={microgreen.availability}
        />
      </li>
    );
  });

  return (
    <div className="home-container">
      <div className="desktop-home">
        <ul>
          {products}
        </ul>
        <Content 
          updateContent={updateContent}
          content={content}
        />
      </div>

      <div className="mobile-home">
        { content === null ?
          <ul>
            {products}
          </ul>
        :
          <Content content={content} />
        }
      </div>
    </div>
  );
};

export default Home;