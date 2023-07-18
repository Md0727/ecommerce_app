import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/CartSlice';
import { fetchProduct } from '../redux/ProductSlice';

const Card = () => {
    const state = useSelector((state) => state.product.data)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const handlerAdd = (product) => {
        dispatch(add(product))
    }
 
  return (
      <div className="productCard" style={{marginTop: '100px'}}>
          <div className="container mt-5">
              <div className="row">
                  {
                    state.length === 0 ? "Loadding.." : 

                    state.map((items, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="product-card">
                                <img className="product-image" src={items.image} alt={'Product 1'} />
                                <h2 className="product-title">{items.title}</h2>
                                <p className="product-price">${items.price}</p>
                                <p className="product-description">{items.description}</p>
                                <button onClick={()=>handlerAdd(items)} className="add-to-cart-button">Add to Cart</button>
                            </div>
                        </div>
                    ))
                  }
              </div>
          </div>
      </div>
  )
}

export default Card