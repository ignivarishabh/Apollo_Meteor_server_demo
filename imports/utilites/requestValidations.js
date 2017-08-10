let validations = {
	isTextOnly : function(value) {
	    var filter = /^[a-zA-Z]+$/;
	    if (filter.test(value)) {
	        return true;
	    }
	    return false;
	},

	isString : function(value) {
    var filter = /[a-zA-Z]+/;
    if (filter.test(value)) {
        return true;
    }
    return false;
	},

	isValidLength : function(value, len) {
	    var dLength = value.length;
	    if (dLength > len) {
	        return false;
	    } else {
	        return true;
	    }
	},


	isAdult : function(dateString) {
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return (age > 17) ? true : false;
	},

	isEmail : function(email) {
     		var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    if (filter.test(email)){
	        return true;
	    }
	 },

    isUrl : function(url){
	    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&`/``/`=]*)?/gi;
	    var regex = new RegExp(expression);
	    if(url.match(regex)){
	        return true   
	    }else{
	        return false
	    }
	 },

    isPhoneNo : function(mobile){
	   // return (mobile.match(/^\d{10,15}$/));
	    if(mobile.match(/^\d{7,25}$/)){
	        return true;
	    }else{
	        return false;
	    }
	 }
}


export function checkFields(objRecieved,fieldsTocheck){
		fieldsTocheck.forEach((each)=>{
			if(!objRecieved.hasOwnProperty(each) || !objRecieved.each){
				return `please fill ${each}`
			}
		});

		return false;
}

export function validate(valObj){
	for(let each in valObj){
		if(validations.hasOwnProperty(each)){
			if(!validations[each](valObj.each)){
				return `Enter a valid ${each}`
			}
		}
	}	
	return false
}



String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};












