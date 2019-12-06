import React from 'react';

const SingleItem = (props) => (
<div className="menu-list">
<div className="item-name">{props.itemList.item}</div>
<div className="item-price">
${props.itemList.price}</div>
<div className="item-description">{props.itemList.description}</div>

</div>
)

export default SingleItem;