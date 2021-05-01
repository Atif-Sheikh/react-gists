import React, { useState } from 'react';

import SearchBar from '../components/searchBar';
import ResultDetails from '../components/resultDetails';
import GistCard from '../components/gistCard';
import { getGists } from '../utils/gistsAPI';

const SearchScreen = () => {
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const handleSearch = async (name) => {
        try {
            setLoading(true);
            setSearchResult(null);
            setErr(null);
            let result = await getGists(name);
            let toJSON = await result.json();

            if (toJSON?.message) {
                setErr(toJSON?.message);
            } else {
                setSearchResult(toJSON);
            }

            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <ResultDetails searchResult={searchResult} error={err} loading={loading} />
            {
                searchResult?.map((gist, index) => (
                    <GistCard key={index} gist={gist} />
                ))
            }
        </div>
    )
}

export default SearchScreen;
