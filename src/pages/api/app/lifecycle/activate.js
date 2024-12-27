const md5 = require('md5');

export default async function handler(req, res) {
    try {
        console.log("Activated!");

        res.status(200).json({ body: "OK" });
    } catch (e) {
        return Error(e.message);
    }
}