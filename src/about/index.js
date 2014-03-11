require('insert-css')(require('./style.css'));

module.exports = {
    id: 'about',
    template: require('./template.html'),
    data: {
        msg: 'Welcome to about!'
    }
};
