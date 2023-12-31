import React, {useState} from 'react';

import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import {Product} from '../../components';





const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

  return (
      <div>
          <div className="product-detail-container">
              <div>
                  <div className="image-container">
                      <img src={urlFor(image && image[index])
                      }  className="product-detail-image"/>
                  </div>
                  <div 
                  className="small-image-container">
                      {image?.map((item, i) => (
                          <img
                              src={urlFor(item)}
                              className={i === index ?
                            'small-image select-image' : 'small-image'}
                              onMouseEnter = {() => setIndex(i)}
                          />
                  ))}
                </div>
              </div>
              <div className="product-detail-desc">
                  <h1>{name}</h1>
                  <div className="reviews">
                      <div>
                          
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                          
                      </div>
                      <p>
                        (20)
                      </p>
                  </div>
                      <h4>Details:</h4>
                      <p>{details}</p>
                      <p className="price">{price}Fcfa</p>
                      <div className="quantity">
                          <h3>Quantite:</h3>
                          <p className="quantity-desc">
                              <span className="minus" onClick=""><AiOutlineMinus/></span>
                              <span className="num" onClick="">0</span>
                              <span className="plus" onClick=""><AiOutlinePlus/></span>
                          </p>
                      </div> 

                      <div className="buttons">
                          <button type="button" className="add-to-cart" onClick=""> Ajouter au panier</button>
                           <button type="button" className="buy-now" onClick=""> Acheter Maintenant</button>
                      </div>
              </div>
              
          </div>

          <div className="maylike-products-wrapper">
              <h2> Tu pourrais aussi aimer </h2>
              <div className="marquee">
                  <div className="maylike-products-container track">
                      {products.map((item) => (   
                          <Product key={item._id}
                          product={item}/>
                      ))}
                      
                  </div> 
              </div>
      </div>
    </div>
          
        
       

  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}





export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  console.log(product);

  

  return {
    props: { products, product }
  }
}




export default ProductDetails