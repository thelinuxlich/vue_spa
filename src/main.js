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
        ready: function() {
            document.title = this.currentView;
        },
        template: require('./app.html'),
        data: {
            currentView: routing.getRoute(),
            routes: routing.routes
        }
    });

app.$watch("currentView", function(value) {
    document.title = value;
});

window.addEventListener('hashchange', function () {
    app.currentView = routing.getRoute();
});


