const getMessage = (key, lang = 'en') => {
    const language = require(`./${lang}/messages.json`);
    const message = language[key] || language.unknown_error;
    return message;
};

module.exports = {
    getMessage,
};
