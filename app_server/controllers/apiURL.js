const apiURL = {
    server:'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiURL.server = 'https://stoilov-sebastien.azurewebsites.net';
}

module.exports = apiURL;