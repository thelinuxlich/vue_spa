require('insert-css')(require('./style.css'));

module.exports = {
    id: "home",
    template: require('./template.html'),
    data: {
        msg: 'Welcome to home!'
    }
};
