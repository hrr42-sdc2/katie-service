import React from 'react';

const SingleItem = (props) => (
<div>
<div className="item-name">{props.itemList.item}</div>
<div className="item-price">
${props.itemList.price}</div>
<div className="item-description">{props.itemList.description}</div>
<br></br>
</div>
)

export default SingleItem;