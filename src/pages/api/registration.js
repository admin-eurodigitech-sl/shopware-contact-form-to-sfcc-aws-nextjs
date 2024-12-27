const md5 = require('md5');
const crypto = require("crypto")

export default async function handler(req, res) {
    try {
        console.log("Register called!");
        console.log(req.url);

        const urlSeachParams = new URL(req.url).searchParams;
        const shopId = urlSeachParams.get("shop-id");
        const shopUrl = urlSeachParams.get("shop-url");

        const hash = crypto.createHmac("sha256", "mysecret");

        const proof = hash.update(shopId+shopUrl+"SFCCIntegrationContactForms");


        res.status(200).json({ 
            proof,
            secret: "mysecret",
            confirmation_url: "https://shopware-contact-form-to-sfcc-aws-nextjs.vercel.app/api/confirmation"
         });
    } catch (e) {
        return Error(e.message);
    }
}