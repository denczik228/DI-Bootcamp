const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const axios = require('axios');
let Parser = require('rss-parser');

const app = express() //imports from express
app.use(cors())
dotenv.config()

app.listen(process.env.PORT || 8080, () => {
    console.log(`running on ${process.env.PORT}`)
})

// parse application/json
app.use(bodyParser.json())
// parse application/forms
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

//парсим нашу дату
const rss = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.thefactsite.com/feed/')
    console.log(feed);
    return feed.items;
}

app.get('/', function (req, res) {
    rss()
        .then(posts => {
            res.render('pages/index', {
                posts: posts
            });
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/search', function (req, res) {
    rss()
    .then(data => {
        res.render('pages/search', {
            catg: data,
            posts: []
        })
    })
        .catch(err => {
            console.log(err);
        })
});

const searchCategories = async (val) => {
    let posts = await rss();
    let filteredPosts = posts.filter(post => {
        return post.categories.includes(val)
    })
    return { filteredPosts, posts }
}

const searchTitle = async (val) => {
    let posts = await rss();
    let filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(val.toLowerCase())
    })
    return { filteredPosts, posts }
}

app.post('/search/title', (req, res) => {
    searchTitle(req.body.title)
        .then(data => {
            res.render('pages/search', {
                posts: data.filteredPosts,
                catg: data.posts
            })
        })
        .catch(err => {
            console.log(err);
        })
})

app.post('/search/category', (req, res) => {
    searchCategories(req.body.category)
        .then(data => {
            res.render('pages/search', {
                posts: data.filteredPosts,
                catg: data.posts
            })
        })
        .catch(err => {
            console.log(err);
        })
})