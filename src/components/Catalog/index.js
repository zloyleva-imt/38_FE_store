import React from 'react';

import CatalogList from '../CatalogList';

export default () => {
    return (
        <main className="App-main container">
            <div className="row">
                <div className="col">
                    <h2 className="h2">Catalog</h2>
                </div>
            </div>

            <CatalogList />

        </main>
    );
}