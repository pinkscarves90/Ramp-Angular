// This sample assumes use of Express Node.js framework 
const axios = require('axios');
const CryptoJS = require('crypto-js');
var express  = require('express');
    var app      = express(); 
// Store API keys in your environment configuration.
const YOUR_WYRE_API_KEY = 'AK-N8AW877C-4D2A3ZPH-4FPG6HW9-7ZTQ3G82';
const YOUR_WYRE_SECRET_KEY = SK-XXXX-XXXX-XXXX;

const productionUrl = "https://api.senwyre.com";
const testUrl = "https://api.testwyre.com"

// Signature Calculation using Crypto-js
const signature = (url, data) => {
    const dataToSign = url + data;
    const token = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(dataToSign.toString(CryptoJS.enc.Utf8), YOUR_WYRE_SECRET_KEY));
    return token;
}
app.listen(8080);
    console.log("App listening on port 8080");
/*Wallet Order Quotation POST request: 
https://docs.sendwyre.com/docs/wallet-order-quotation
*/

 app.post('/api/todos', function(req, res) {
        try {
            const timestamp = new Date().getTime();
            const url = `${testUrl}/v3/orders/reserve`;
            const headers = {};
            const body = {
                accountId: "AC_28ZMELGWTUR",
              
            }
            const details = JSON.stringify(body);

            headers['Content-Type'] = 'application/json';
            headers['X-Api-Key'] = YOUR_WYRE_API_KEY;
            headers['X-Api-Signature'] = signature(url, details);

            const config = {
                method: "POST",
                url: url,
                headers: headers,
                data: details
            }

            const response = await axios(config);
            res.send(response.data);

        } catch (error) {
            next(error)
        }
    }