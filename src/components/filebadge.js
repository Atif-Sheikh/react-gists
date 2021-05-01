import React, { useEffect, useState } from 'react'

const Filebadge = ({ files }) => {
    const [filesArr, setFilesArr] = useState([]);

    useEffect(() => {
        let languages = {};
        let filesLanguages = Object.values(files);

        filesLanguages.forEach(({language}) => languages[language] = language);
        setFilesArr(Object.values(languages));
    }, [files]);

    return (
        <ul className="badgeContainer">
            {filesArr.map((language, index) => (<li className="badge" key={index}>{language}</li>))}
        </ul>
    )
}

export default Filebadge;
