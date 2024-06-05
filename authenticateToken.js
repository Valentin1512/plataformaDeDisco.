const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const payload = jwt.verify(token, SECRET);
        req.user = payload;
        next();
    } catch (err) {
        res.sendStatus(403);
    }
};

module.exports = authenticateToken;
