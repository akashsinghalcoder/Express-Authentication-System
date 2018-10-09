module.exports.home=function(req, res, next) {
	if(req.session.userid)
	{
  res.render('index', { title: 'Expredsdfscdss' });   
}
else
{
	return res.redirect('/userlogin');
}
}


