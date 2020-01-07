import React from 'react';
import SingleItem from './SingleItem.jsx';

const Menu = (props) => (
  <div>
  <div className='list1'>{props.category}</div>
  <hr />
  <div className='list'>
    {props.menuList.map((itemList) =><SingleItem key={itemList._id} itemList={itemList} />)}
  </div>
  </div>
);

export default Menu;
