const md5 = require('md5');

export default async function handler(req, res) {
    try {
        console.log("Register!");

        const { shopId, shopUrl, secret } = req.body;

        console.log(secret);


        if (secret !== 'MySecretTest') {
            return res.status(403).send('Invalid secret');
        }

        console.log('App registered for shop:', shopId);


        console.log('Shop url is:', shopUrl);


        res.status(200).json({ body: "Registration successful" });
    } catch (e) {
        return Error(e.message);
    }
}