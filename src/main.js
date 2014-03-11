require('insert-css')(require('./app.css'));

var routing = require("./routes"),
    Vue = require('vue'),
    app = new Vue({
        el: '#app',
        components: {
            home: require('./home'),
            blog: require('./blog'),
            about: require('./about'),
            notfound: require('./notfound')
        },
        template: require('./app.html'),
        data: {
            currentView: routing.getRoute(),
            routes: routing.routes
        }
    });

window.addEventListener('hashchange', function () {
    app.currentView = routing.getRoute();
});


