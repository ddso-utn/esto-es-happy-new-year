import React, { useState } from 'react';


export default function SearchBar(props) {
  const [search, setSearch] = useState('');

  return (
    <span>
      <input type='text' name='search' onChange={(event) => setSearch(event.target.value)}></input>
    </span>
  )
}