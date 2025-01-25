const languageMiddleware = (req, res, next) => {
    const lang = req.query.lang || req.headers['accept-language']?.split(',')[0]?.split('-')[0] || 'en';
    const supportedLanguages = ['en', 'es'];
    req.lang = supportedLanguages.includes(lang) ? lang : 'en';
    next();
};
module.exports = languageMiddleware;
