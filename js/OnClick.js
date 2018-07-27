function OnClickFunction(){
	var number_element = document.getElementById("number").value;
	
	if (validation(number_element)){
		if ( ( number_element > 0 ) && (  number_element < 1001 ) )
		{
			alert('it is ok');
			addSquare(number_element);
		}else{
			alert('Please check that your number more than 0 and less than 1001');
		}
	}else{
		alert('You write not a number');
	}
}

//check what write user, return true if it is int number and false in other
function validation(elementFromUser){
	if ( parseInt(elementFromUser) != elementFromUser ) {
		return false;
	} else {
		return true;
	}
}

function addSquare(number){
	var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		for( var i = 0; i < 8; i++ ){
			ctx.fillRect(i*100, i*100, 100, 100);
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("Hello World",50,50);
		}
}