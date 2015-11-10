app.factory('UserFactory',function(){
	var user = {
		userId: localStorage.getItem('$LoopBack$currentUserId'),
		accessToken: localStorage.getItem('$LoopBack$accessTokenId')
	}

	user.set = function(userId,accessToken){
		user.userId = userId;
		user.accessToken = accessToken;
	}

	return user;
})