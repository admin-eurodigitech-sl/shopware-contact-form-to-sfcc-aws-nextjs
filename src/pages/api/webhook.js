const md5 = require('md5');

export default async function handler(req, res) {
    try {
        // VALIDATE IF REQUEST IS LEGIT
        if (req.method !== "POST") {
            res.status(500).json({ body: "Internal Server Error" });
        }

        
        //FUNCTION IS BEING CALLED
        console.log("Hualla loco me han llamado");


        //GET AUTHORIZATION TOKEN
        const getTokenUrl = process.env.GET_TOKEN_ENDPOINT;
        const grantType = process.env.GRANT_TYPE;
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        const getTokenHeaders = new Headers();

        getTokenHeaders.append("Content-Type", "application/json");

        const getTokenResponse = await fetch(getTokenUrl, {
            method: "POST",
            headers: getTokenHeaders,
            body: JSON.stringify({
                grant_type: grantType,
                client_id: clientId,
                client_secret: clientSecret,
            }),
        });

        const { access_token, status } = await getTokenResponse.json();

        /*
        //POST DATA

        let postData = "" // TODO: Hanlde post data calculation

        //POST CONTACT DATA INTO SFCC
        const postEndpoint = process.env.POST_ENDPOINT;
        const postContactInfoHeaders = new Headers();

        getTokenHeaders.append("Content-Type", "application/json");
        getTokenHeaders.append("Authorization", `Bearer ${access_token}`);

        const postResponse = await fetch(postEndpoint, {
            method: "POST",
            headers: postContactInfoHeaders,
            body: JSON.stringify([
                {
                    "keys": {
                        "MemberId": md5(JSON.stringify(postData))
                    },
                    "values": postData
                }
            ])
        })

        const { status, body } = await postResponse.json(); 
        */

        res.status(status).json({ body: "OK" });
    } catch (e) {
        return Error(e.message);
    }
}