require('insert-css')(require('./style.css'));

module.exports = {
    id: 'blog',
    template: require('./template.html'),
    data: {
        msg: 'Welcome to blog!'
    }
};
