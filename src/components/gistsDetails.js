import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { getGistById } from '../utils/gistsAPI';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Forks({ showModal, setShowModal, gist }) {
    const classes = useStyles();
    const [forks, setForks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetchGist();
    }, [gist]);

    const fetchGist = async () => {
        setLoading(true);
        let gistDetails = await getGistById(gist.id);
        let jsonFormated = await gistDetails.json();

        setForks(jsonFormated.forks);
        setLoading(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={showModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={showModal}>
                <div className={classes.paper}>
                    {
                        loading ?
                        <p className="result">Loading...</p>
                        :
                        !forks.length ?
                            <p id="transition-modal-description">No forks Found</p>
                            :
                            <>
                                <p id="transition-modal-description">{gist.description}</p>

                                <div className="forks-box">
                                    <p className="text-primary">Forks:</p>
                                    <ul className="indent-left">
                                        {forks.map((fork, index) => {
                                            return (
                                                <li className="forkAvatar" key={index}>
                                                    <img key="image" src={fork.user.avatar_url} alt={fork.user.login} className="avatar" />
                                                    <span key="username" className="text-secondary">{fork.user.login}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </>
                    }
                </div>
            </Fade>
        </Modal>
    );
}