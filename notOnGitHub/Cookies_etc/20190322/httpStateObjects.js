function httpStateObjects() {	
	localStorage.setItem('userName', 'alwaysUp');
	localStorage.setItem('userPass', 'alwaysPass');
	document.querySelector("#localData").innerHTML += localStorage.getItem('userName');	


	sessionStorage.setItem('userName', 'tempUp');
	sessionStorage.setItem('userPass', 'tempPass');
	document.querySelector("#sessionData").innerHTML = sessionStorage.getItem('userName');
	
	document.cookie = 'userName=cookieUserName';
	document.cookie = 'passWord=cannotBeCracked; path=/; expires='+ new Date(2020, 0,1).toUTCString();
	document.cookie = "anotherCookie=moreCookies; expires= Thu, 28 Mar 2019 20:00:00 UTC; path=/ "
	document.querySelector("#cookieData").innerHTML = document.cookie;

}