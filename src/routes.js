// add your routes/components here
var routes = ['home', 'blog', 'about'],
    initialPage = 'home';

// simple regex for url dispatch
module.exports = {
    routes: routes,
    getRoute: function () {
        var path = location.hash.replace(/^#!\/?/, '') || initialPage;
        return routes.indexOf(path) > -1 ? path : 'notfound';
    }
};
