import React from 'react';

import CatalogItem from '../CatalogItem';

export default (props) => {
    const {products} = props;
    return (
        <div className="row">
            {
                products.map(el => (<CatalogItem key={el.id} product={el}/>))
            }
        </div>
    );
}