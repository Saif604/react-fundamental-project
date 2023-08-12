import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const getData = async (URL) =>{
  const resp = await fetch(URL);
  const data = await resp.json();
  root.render(<Component data={data} />);
}

function Component(props){
  const arr = props.data;
  return (
    <>
      <section>
        <div className="section-center">
          <h1 className="head">Website</h1>
          <div className="hero">
            {
              arr.map(item=>{
                return <Article {...item} key = {item.id} />
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}
function Article(props){
  const {description,image,price,title} = props;
  return (
    <article className="article">
      <div className="img-price-container">
        <div className="img-container">
          <img src={`${image}`} alt="img" />
        </div>
        <h4 className="item-price">${price}</h4>
      </div>
      <h4 className="prod-title">{title}</h4>
      <p className="prod-desc">{description}</p>
    </article>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));

getData('https://fakestoreapi.com/products');