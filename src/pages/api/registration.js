const md5 = require('md5');

export default async function handler(req, res) {
    try {
        console.log("Register called!");
        const url = new URL(req.url);
        const searchParams = url.searchParams;

        const shopId = searchParams.get("shopId");
        const shopUrl = searchParams.get("shopUrl");
        const secret = searchParams.get("secret");


        console.log(req.body);

        console.log(secret);


        console.log('App registered for shop:', shopId);


        console.log('Shop url is:', shopUrl);


        res.status(200).json({ body: "Registration successful" });
    } catch (e) {
        return Error(e.message);
    }
}