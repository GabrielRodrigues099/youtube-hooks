import React, { useState } from 'react';
import './styles.css'

const SearchBar = ({ onFormSubmit, title }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();


        onFormSubmit(term);
    };

    return (
        <div className='search-bar ui segment search__form'>
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>{title}</label>
                    <input
                        type='text'
                        value={term}
                        onChange={(e)=> setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
