require("dotenv").config();
const express = require('express');
const axios = require('axios').default;

const app = express();
const port = process.env.BACKEND_PORT;
const apikey= process.env.WHOIS_API_KEY;

async function getWhoIsData(domainOrIP) {
	try {
		const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService`;
		const response = await axios.get(url, { params: { apiKey: apikey, domainName: domainOrIP, outputFormat: 'json' }});
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

app.get('/whoisdata', async (req, res) => {
	const data = await getWhoIsData(req.query.domainOrIP);
	res.header("Access-Control-Allow-Origin", "*");
	res.send(data);
})

app.listen(port, () => {
  console.log(`WhoIs server listening on port ${port}`);
})