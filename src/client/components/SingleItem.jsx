import React from 'react';

const SingleItem = (props) => (
<div>
     {props.itemList.item}
    &emsp; ${props.itemList.price}
</div>
)

export default SingleItem;