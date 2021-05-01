import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Filebadge from '../components/filebadge';
import GistsDetails from '../components/gistsDetails';

const GistCard = ({ gist }) => {
    const [showModal, setShowModal] = useState(false);
    const noOfFiles = Object.keys(gist.files).length;

    return (
        <div className="gistCard">
            <p className="gistDescription">
                {gist.description}
            </p>
            <p className="noOfFiles">
                {noOfFiles} {noOfFiles > 1 ? 'File' : 'Files'}
            </p>
            <ul className="filesContainer">
                {
                    Object.values(gist.files).length ? Object.values(gist.files)?.map((file, ind) => (
                        <li className="gistFile" key={ind}>
                            <a href={file.raw_url} rel="noreferrer" target="_blank">
                                {file.filename}
                            </a>
                        </li>
                    ))
                        :
                        null
                }
            </ul>
            <Filebadge files={gist.files} />
            <Button className="forkBtn" onClick={() => setShowModal(true)} variant="outlined" color="primary">
                Forks
            </Button>
            {
                showModal ?
                    <GistsDetails showModal={showModal} setShowModal={setShowModal} gist={gist} />
                    :
                    null
            }
        </div>
    )
}

export default GistCard
