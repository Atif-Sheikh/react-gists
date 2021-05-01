import React from 'react';

const ResultDetails = ({ searchResult, loading, error }) => {

    if (loading) return <div>
        <p className="result">Loading...</p>
    </div>;

    return (
        <div>
            {
                searchResult ? <div className="searchResultContainer">
                    <p className="result">{error ? error : `${searchResult.length} ${searchResult.length > 1 ? 'Gists' : 'Gist'} found.`}</p>
                </div>
                    :
                    null
            }
        </div>
    )
}

export default ResultDetails;
