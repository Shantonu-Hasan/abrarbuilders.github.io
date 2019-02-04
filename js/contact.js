var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var letterNumber = /^[0-9a-zA-Z]+$/;
var numbers=/^[0-9]+$/;
var numbersWithHiphene=/^[0-9-]+$/;
function getEl(elId){	return document.getElementById(elId);	}
function highLight(elId)
{
	item=getEl(elId);
	item.style.border="1px solid rgb(255,40,40)";
	item.focus();
}
function toggle(formIndex)
{
	for(elIndex=0;elIndex<document.forms[formIndex].length;elIndex++)
	{
		item=document.forms[formIndex].elements[elIndex];
		item.style.border="1px solid rgb(210,210,210)";
		/*item=getEl("own1");
		item.style.border="none";*/
	}
}
function checkRadio(formIndex,radioName){
	//alert("check radio");
	len = document.forms[formIndex].elements[radioName].length;
	for(i = 0; i <len; i++) {
		if(document.forms[formIndex].elements[radioName][i].checked==true) {
			return true;
		}
	}
	return false;
}
function validate_acquire(formIndex){
	//alert("validate2");
	toggle(formIndex);
	if(getEl('name').value.length==0){
		alert("Name is Mandatory");
		highLight("name");
		return false;
	}
	else if(getEl('relationship').selectedIndex==0){
		alert("Relationship to Aircraft is Mandatory");
		highLight("relationship");
		return false;
	}
	else if(getEl('phone').value.length==0){
		alert("Phone is Mandatory");
		highLight("phone");
		return false;
	}
	else if(!getEl('phone').value.match(numbersWithHiphene)){
		alert("Invalid Phone Number");
		highLight("phone");
		return false;
	}
	else if(getEl('email').value.length==0){
		alert("Email is Mandatory");
		highLight("email");
		return false;
	}
	else if(!reg.test(getEl('email').value)){
		alert("Check Email Format");
		highLight("email");
		return false;
	}
	else if(getEl('line1').value.length==0){
		alert("Address Line 1 is Mandatory");
		highLight("line1");
		return false;
	}
	else if(!checkRadio(formIndex,"ownAircraft")){
		alert("Please select whether you own or operate an aircraft ?");
		//highLight("own1");
		return false;
	}
	else if(getEl('messageToJetvend').value.length==0){
		alert("Message is Mandatory");
		highLight("messageToJetvend");
		return false;
	}
	else if(getEl('captcha').value.length==0){
		alert("You must fill captcha");
		highLight("captcha");
		return false;
	}
	else if(getEl('capTotal').value!=getEl('captcha').value){
		alert("Invalid Captcha");
		highLight("captcha");
		return false;
	}
	else{
			return true;
	}
	
}
function validate_sell(formIndex){
	//alert("validate2");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	toggle(formIndex);
	
	if(getEl('slNumber').value.length==0){
		alert("Serial Number is Mandatory");
		highLight("slNumber");
		return false;
	}
	else if(getEl('registration').value.length==0){
		alert("Registration is Mandatory");
		highLight("registration");
		return false;
	}
	else if(getEl('relationship').selectedIndex==0){
		alert("Relationship to Aircraft is Mandatory");
		highLight("relationship");
		return false;
	}
	else if(getEl('ttaf').value.length==0){
		alert("TTAF is Mandatory");
		highLight("ttaf");
		return false;
	}
	else if(getEl('homeAirport').value.length==0){
		alert("Home Airport is Mandatory");
		highLight("homeAirport");
		return false;
	}
	else if(getEl('name').value.length==0){
		alert("Name is Mandatory");
		highLight("name");
		return false;
	}
	else if(getEl('phone').value.length==0){
		alert("Phone is Needed");
		highLight("phone");
		return false;
	}
	else if(!getEl('phone').value.match(numbersWithHiphene)){
		alert("Invalid Phone Number");
		highLight("phone");
		return false;
	}
	else if(getEl('email').value.length==0){
		alert("Email is Mandatory");
		highLight("email");
		return false;
	}
	else if(!reg.test(getEl('email').value)){
		alert("Check Email Format");
		highLight("email");
		return false;
	}
	else if(getEl('line1').value.length==0){
		alert("Address Line 1 is Mandatory");
		highLight("line1");
		return false;
	}
	else if(getEl('captcha').value.length==0){
		alert("You must fill captcha");
		highLight("captcha");
		return false;
	}
	else if(getEl('capTotal').value!=getEl('captcha').value){
		alert("Invalid Captcha");
		highLight("captcha");
		return false;
	}
	else if(getEl('messageToJetvend').value.length==0){
		alert("Message is Mandatory");
		highLight("messageToJetvend");
		return false;
	}
	else{
		//if(confirm("Are you sure ??"))
			return true;
		//else
		//	return false;
	}
	
}

function validate_parts(formIndex){
	//alert("validate2");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	toggle(formIndex);
	
	if(getEl('partNumber').value.length==0){
		alert("Part Number is Mandatory");
		highLight("partNumber");
		return false;
	}
	else if(getEl('aircraftType').value.length==0){
		alert("Aircraft Type is Mandatory");
		highLight("aircraftType");
		return false;
	}
	else if(getEl('countryOfRegistration').value.length==0){
		alert("Country Of Registration is Mandatory");
		highLight("countryOfRegistration");
		return false;
	}
	else if(getEl('name').value.length==0){
		alert("Name is Mandatory");
		highLight("name");
		return false;
	}
	else if(getEl('line1').value.length==0){
		alert("Address Line 1 is Mandatory");
		highLight("line1");
		return false;
	}
	else if(getEl('phone').value.length==0){
		alert("Phone is Needed");
		highLight("phone");
		return false;
	}
	else if(!getEl('phone').value.match(numbersWithHiphene)){
		alert("Invalid Phone Number");
		highLight("phone");
		return false;
	}
	else if(getEl('email').value.length==0){
		alert("Email is Mandatory");
		highLight("email");
		return false;
	}
	else if(!reg.test(getEl('email').value)){
		alert("Check Email Format");
		highLight("email");
		return false;
	}
	else if(getEl('messageToJetvend').value.length==0){
		alert("Message is Mandatory");
		highLight("messageToJetvend");
		return false;
	}
	else if(getEl('captcha').value.length==0){
		alert("You must fill captcha");
		highLight("captcha");
		return false;
	}
	else if(getEl('capTotal').value!=getEl('captcha').value){
		alert("Invalid Captcha");
		highLight("captcha");
		return false;
	}
	else{
		//if(confirm("Are you sure ??"))
			return true;
		//else
		//	return false;
	}
	
}
function validate_default(formIndex){
	//alert("validate2");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	toggle(formIndex);
	
	if(getEl('name').value.length==0){
		alert("Name is Mandatory");
		highLight("name");
		return false;
	}
	else if(getEl('relationship').selectedIndex==0){
		alert("Relationship to Aircraft is Mandatory");
		highLight("relationship");
		return false;
	}
	else if(getEl('phone').value.length==0){
		alert("Phone is Needed");
		highLight("phone");
		return false;
	}
	else if(!getEl('phone').value.match(numbersWithHiphene)){
		alert("Invalid Phone Number");
		highLight("phone");
		return false;
	}
	else if(getEl('email').value.length==0){
		alert("Email is Mandatory");
		highLight("email");
		return false;
	}
	else if(!reg.test(getEl('email').value)){
		alert("Check Email Format");
		highLight("email");
		return false;
	}
	else if(getEl('line1').value.length==0){
		alert("Address Line 1 is Mandatory");
		highLight("line1");
		return false;
	}
	else if(getEl('messageToJetvend').value.length==0){
		alert("Message is Mandatory");
		highLight("messageToJetvend");
		return false;
	}
	else if(!checkRadio(formIndex,"ownAircraft")){
		alert("Please select whether you own or operate an aircraft ?");
		//highLight("own1");
		return false;
	}
	else if(getEl('captcha').value.length==0){
		alert("You must fill captcha");
		highLight("captcha");
		return false;
	}
	else if(getEl('capTotal').value!=getEl('captcha').value){
		alert("Invalid Captcha");
		highLight("captcha");
		return false;
	}
	else{
		//if(confirm("Are you sure ??"))
			return true;
		//else
			//return false;
	}
	
}