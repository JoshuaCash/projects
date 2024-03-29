const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.bbc.com/news'

axios(url)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html)
        const articles = []
        $('.gs-c-promo-heading', html).each(function() {
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, console.log(`server running on PORT ${PORT}`));

