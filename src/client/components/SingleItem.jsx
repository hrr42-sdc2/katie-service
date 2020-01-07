import React from 'react';

const SingleItem = (props) => (
<div>
  <div className="item-name">{props.itemList.item_name}</div>
  <div className="item-price">
  ${props.itemList.price}</div>
  <div className="item-description">{props.itemList.details}</div>
</div>
);

export default SingleItem;
