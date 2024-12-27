const md5 = require('md5');

export default async function handler(req, res) {
    try {
        console.log("Register called!");
        console.log(req.url);

        res.status(200).json({ body: "Registration successful" });
    } catch (e) {
        return Error(e.message);
    }
}