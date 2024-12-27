const md5 = require('md5');

export default async function handler(req, res) {
    try {
        console.log("Register called!");
        const url = new URL(req.url);
        console.log(url);

        const searchParams = url.searchParams;

        console.log(searchParams);


        const shopId = searchParams.get("shopId");
        const shopUrl = searchParams.get("shopUrl");

        console.log(shopId);
        console.log(shopUrl);


        res.status(200).json({ body: "Registration successful" });
    } catch (e) {
        return Error(e.message);
    }
}