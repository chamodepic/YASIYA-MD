const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~AR4iWKKA#6eCaulBri8Fqd0HQsvINTu_iyVz4IhcBdg3bRh8GACg'
};
