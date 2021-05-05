const axios = require('axios');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    let data = JSON.parse(event.body);
    let xml_data = null;
    await axios.get("https://news.google.com/rss/search?q="+data.formatted_search+" after:"+data.year+"-01-01+before:"+data.year+"-12-30&hl=en-US&gl=US&ceid=US:en&gl=US")
    .then(res =>{
      xml_data = res.data;
    }).catch( error => {
        console.log(error);
    });
    return {
      statusCode: 200,
      body: xml_data,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
