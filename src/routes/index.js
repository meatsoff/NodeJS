const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // app.get('/news', (req, res) => {
    //   res.render('News')
    // })
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     // res.send('Hello World!')
    //     res.render('Home')
    // })

    // app.get('/search', (req, res) => {
    //     res.render('Search')
    // })

    // app.post('/search', (req, res) => {
    //     res.send('')
    // })
}

module.exports = route;
