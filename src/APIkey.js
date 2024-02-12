
//API avain täytyy salata
const apiKey = 'APIKEY';

const BaseUrl = 'https://api.themoviedb.org/3';
const options = {   //Perus asetukset, voi lisätä/poistaa tarvittavia
    method: 'GET',
    params: { language: 'fi-FI' },    //fi-FI suomi, en-US englanti
    headers: {
        accept: 'application/json',
        Authorization: apiKey
    }
};
const generateApiUrl = (endpoint = {}) => { //Tekee endpointista osoitteen

    return `${BaseUrl}${endpoint}`;
};

export { generateApiUrl, options };
