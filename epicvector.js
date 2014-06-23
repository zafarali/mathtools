/*
E P I C  V E C T O R S
*/

var EpicVector = {
	create:function(arguments){
		//end now if no arguments are supplied
		if(arguments.length==0 && arguments!=null) return false;
		var treatment = 0;
		if(arguments.length==1 && arrayUtils.isArray(arguments)){
			//we know the user has passed in an array
			//next step: determine the size of the array.
			if(arguments[0].length==2) treatment = 2; //2D array --> 2D vector
			if(arguments[0].length==3) treatment = 3; //3D array --> 3D vector
			if(arguments[0].length==4) treatment = 4; //4D array --> 4D vector
			if(arguments[0].length>4) treatment = 1; //ND array --> ND vector
			if(arguments[0].length==1) return parseInt(arguments[0]); 
		}

		//if the user passes in only one argument and it is a number, we return that.
		if(arguments.length==1 && !isNaN(arguments)) return arguments;
		
		//the user has passed in more than one argument
		if(arguments.length==2) treatment = 2;
		if(arguments.length==3) treatment = 3;
		if(arguments.length==4) treatment = 4;
		if(arguments.length>4) treatment = 1;


		switch(treatment){
			case 1:


			break;
			case 2:


			break;
			case 3:


			break;
			case 4:



			break;
			default:

			
		}
	}
}

