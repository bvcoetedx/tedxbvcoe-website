import { useState } from 'react';
import merchItemPlaceholder from '../../../assets/2021/merch/placeholder.jpg';

const MerchItem = ({ item: { item, price, image } }) => {
  const [img, setImg] = useState(image);
  return (
  <>
    <div className='merch-item'>
      <div className='name'>
        <h3>{item}</h3>
      </div>
      <div className='image' 
        onMouseOver={()=>{if(item === 'T-shirt') setImg(require('../../../assets/2022/merch/tshirt-back.png').default)}} 
        onMouseOut={()=>{if(item === 'T-shirt') setImg(require('../../../assets/2022/merch/tshirt.png').default)}}>
        {img ? (
          <img src={img} alt='merch item' />
        ) : (
          <img src={merchItemPlaceholder} alt='merch item' />
        )}
      </div>
      <div className='price'>
        <h3>₹{price}</h3>
        <h4>Out of Stock</h4>
      </div>
    </div>
  </>
)};

export default MerchItem;
