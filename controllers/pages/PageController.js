exports.index = function(req, res) {
 res.render('pages', {title: 'My Pages Log'});
};

exports.add_page = function(req, res) {
 res.render('pages/add_page',{title:'Add Page'});
};


