const md5 = require('md5');
const crypto = require("crypto")

export default async function handler(req, res) {
    try {
        console.log("Confirmation called!");

        res.status(200).json({ body: "OK" });
    } catch (e) {
        return Error(e.message);
    }
}