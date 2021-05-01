import React, { useRef } from 'react'

const SearchBar = ({handleSearch}) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = inputRef.current.value.trim();

        if(!name) return;

        handleSearch(name);
    };

    return (
        <div className="searchBoxContainer">
            <form onSubmit={handleSubmit} className="searchForm">
                <input
                    className="searchField"
                    type="text"
                    placeholder="Search for the user."
                    ref={inputRef}
                />
            </form>
        </div>
    )
}

export default SearchBar;
