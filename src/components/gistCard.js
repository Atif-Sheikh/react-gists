import React from 'react';
import { Link } from 'react-router-dom';

import Filebadge from '../components/filebadge';

const GistCard = ({ gist }) => {
    const noOfFiles = Object.keys(gist.files).length;

    return (
        <Link to={{ pathname: `/${gist.id}`, state: { description: gist.description, files: gist.files } }}>
            <div className="gistCard">
                <p className="gistDescription">
                    {gist.description}
                </p>
                <p className="noOfFiles">
                    {noOfFiles} {noOfFiles > 1 ? 'File' : 'Files'}
                </p>
                <Filebadge files={gist.files} />
            </div>
        </Link>
    )
}

export default GistCard
