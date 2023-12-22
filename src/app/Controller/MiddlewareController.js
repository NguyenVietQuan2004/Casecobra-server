import jwt from 'jsonwebtoken';
export const verifyLogin = (req, res, next) => {
    const accessToken = req.headers?.token?.split(' ')[1];
    if (accessToken) {
        jwt.verify(accessToken, 'mk', (err, user) => {
            if (err) {
                return res.status(403).json('Token is not valid');
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(403).json('You are not authenticated!');
    }
};
