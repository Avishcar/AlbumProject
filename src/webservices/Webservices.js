
const BaseURL = "https://jsonplaceholder.typicode.com/"

export const getMoviesFromApi = (url) => {
    return fetch(BaseURL + url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

