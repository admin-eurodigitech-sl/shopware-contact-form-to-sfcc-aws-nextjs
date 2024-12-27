const md5 = require('md5');
const crypto = require("crypto")
const { getQueryParams } = require("../../app/lib");

export default async function handler(req, res) {
    try {
        console.log("Register called!");
        const queryParams = getQueryParams(req.url);
        console.log(queryParams);

        const hash = crypto.createHmac("sha256", "mysecret");
        const proof = hash.update(queryParams.shopId+queryParams.shopUrl+"SFCCIntegrationContactForms");
        console.log(proof);


/*

        console.log(shopId);
        console.log(shopUrl);

        const hash = crypto.createHmac("sha256", "mysecret");

        const proof = hash.update(shopId+shopUrl+"SFCCIntegrationContactForms");


        res.status(200).json({ 
            proof,
            secret: "mysecret",
            confirmation_url: "https://shopware-contact-form-to-sfcc-aws-nextjs.vercel.app/api/confirmation"
         });

         */

         res.status(200).json({ body: "OK" });
    } catch (e) {
        return Error(e.message);
    }
}