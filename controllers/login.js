
var User = require('../models/User');
module.exports.login=function(req,res,next)
{
	res.render('login',{});
}
module.exports.register=function(req,res,next)
{
	 name = req.body.name,
	 email=req.body.email;
	 password=req.body.password;
	 User.findOne({ 'mail' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);
            // check to see if theres already a user with that email
            if (user) {
                return res.redirect('/userlogin');
            } else {
            	 var newUser= new User();
            	  newUser.mail    = email;
                    newUser.password = password;
                    newUser.name = name;
                    newUser.save(function (err,user) {
            if (err)
            {
    	      console.error(err);
    	      return res.redirect('/userlogin');
           }
           req.session.userid=user._id;
                    return res.redirect('/');
           });
                          	
            }
    });



}
module.exports.logout=function(req,res,next)
{
	console.log("EWfewfew");
	if(req.session.userid)
	{
		req.session.userid=null;
	}

	return res.redirect('/userlogin');
}
