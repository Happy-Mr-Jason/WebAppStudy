//window.onload : Run after Load
window.onload = function(){
	var d=new Date(); //Date() get the Current date / time data.
	var h=d.getHours(); // get Hour
	var output="";
	
	if(h<16){
		output += "<ul>";
		output += "<li>된장찌개</li>";
		output += "<li>김치찌개</li>";
		output += "<li>순두부찌개</li>";
		output += "</ul>";
	} else {
		output += "<ul>";
		output += "<li>후라이드 치킨</li>";
		output += "<li>골뱅이무침</li>";
		output += "<li>마른안주</li>";
		output += "</ul>";
	}
	
	document.body.innerHTML +=output;
}

