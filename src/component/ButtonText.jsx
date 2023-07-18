import React from 'react';
import { fetchProduct } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const ButtonText = () => {
  const dispatch = useDispatch(); 
  const state = useSelector((state) => state.product)
  state.isLoading === false ? console.log('data loaded successfuly') : console.log('Loading..')
  console.log(state)

  return (
    <div>
        <button type='button' onClick={(e => dispatch(fetchProduct()))} className='btn btn-success' style={{marginTop: '200px'}}>fetch data</button>
    </div>
  )
}

export default ButtonText;