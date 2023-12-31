import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

export const Product = ({ product: { image, name,
slug, price} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={400}
            height={400}
            className="product-image"  
          />
          <p className="product-name">{name}
          </p>
          <p className="product-price">{price} Fcfa 
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Product
