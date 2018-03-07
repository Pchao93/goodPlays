import React from 'react';
import CollectionRow from './collection_row';

export default ({collections, games}) => (
    <ul className="collection-list">
      {
        collections.map(collection => {
          return (
            <CollectionRow
              key={collection.id}
              collection={collection}
              games={games}/>
          );
        })
      }

    </ul>
);
