import React, { useState } from "react";


import './List1.scss'
//Add
//  Provide Modal
//      Form
//          Input Criteria & Cancel/Submit Button
//          Submit will save and update the state



const list = [{id: 1, name: 'gold', type: '24k' }, { id: 2, name: 'silver', type: 'ring' }, { id: 3, name: 'bronze', type: 'ear' }]

const List1 = () => {
    const [item, setItem] = useState(list)
    const displayList = item.map(jewelry => {
        return (
            <div className='rowlist' key={jewelry.id}>
                {jewelry.name} {jewelry.type}
                <button onClick={() => setItem(item.filter(jj => !(jj.id === jewelry.id) ))}>Remove</button>
            </div>
        )
    })
    return (
        <div>
            {displayList}
            <button onClick={() => setItem([...item, { id: Math.random(), name: 'emerald', type: 'lip' }])}>Add Item</button>
        </div>
    )
}

export default List1;