import { useState } from 'react';

export default function SearchbleList({items, itemKeyFn, children}) {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter(item => JSON.stringify(item).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="searchable-list">
            <input type='search' placeholder="Search" onChange={handleChange}></input>
            <ul>    
                {searchResult.map((item) => <li key={itemKeyFn(item)}>{children(item)}</li> )}
            </ul>
        </div>
    );
}