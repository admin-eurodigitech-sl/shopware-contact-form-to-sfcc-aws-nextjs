const getQueryParams = (queryParamsString) => {

    console.log(queryParamsString);

    const queryParamsRaw = queryParamsString.split("?")[1];
    console.log(queryParamsRaw);

    const splittedQueryParamsRaw = queryParamsRaw.split("&");
    console.log(splittedQueryParamsRaw);

    const shopId = splittedQueryParamsRaw[0].split("=");
    const shopUrl = splittedQueryParamsRaw[1].split("=");
    const timestamp = splittedQueryParamsRaw[2].split("=");

    const queryParamsParsed = {
        shopId: shopId[1],
        shopUrl: shopUrl[1],
        timestamp: timestamp[1],
    }

    return queryParamsParsed;
}  

module.exports = {
    getQueryParams
}