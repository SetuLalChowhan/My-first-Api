const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
    const token = req.headers["access-token"];
    if (!token) return res.status(404).send("Authentication failed");

    try {
        const decode = jwt.verify(token, "setunal");
        req.user = decode;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send("Invalid Token");
    }
}

module.exports = verifyToken;
