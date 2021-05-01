const  BASE_URL = 'https://api.github.com';


export const getGists = (name) => {
    return fetch(`${BASE_URL}/users/${name}/gists`);
};

export const getGistById = (gistId) => {
    return fetch(`${BASE_URL}/gists/${gistId}`);
}