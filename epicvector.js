/*
E P I C  V E C T O R S
*/

//SOME UTILITIES
var arrayUtils = {
	isArray: function(toTest){
		return Object.prototype.toString.call(toTest)==='[object Array]';
	}
}

//EPIC VECTOR CREATOR
var EpicVector = {
	create:function(args){
		//end now if no args are supplied
		if(arguments.length==0 && args!=null) return false;
		var treatment = 0;
		if(arguments.length==1 && arrayUtils.isArray(args)){
			//we know the user has passed in an array
			//next step: determine the size of the array.
			if(arguments[0].length==2) treatment = 2; //2D array --> 2D vector
			if(arguments[0].length==3) treatment = 3; //3D array --> 3D vector
			if(arguments[0].length==4) treatment = 4; //4D array --> 4D vector
			if(arguments[0].length>4) treatment = 1; //ND array --> ND vector
			if(arguments[0].length==1) return parseInt(arguments[0]); 
		}else{
			//if the user passes in only one argument and it is a number, we return that.
			if(arguments.length==1 && !isNaN(args)) return args;
			//the user has passed in more than one argument
			if(arguments.length==2) treatment = 2;
			if(arguments.length==3) treatment = 3;
			if(arguments.length==4) treatment = 4;
			if(arguments.length>4) treatment = 1;
		}
		switch(treatment){
			case 1:
			var arr;
			if(!arrayUtils.isArray(args)){
				//convert our arguments into an array
				arr = Array.prototype.slice.call(arguments);
			}else{
				arr = args;
			}
			return new vecnd(arr);
			break;
			case 2:
				var x = args[0] || arguments[0];
				var y = args[1] || arguments[1];
				return new vec2d(x,y);
			break;
			case 3:
				var x = args[0] || arguments[0];
				var y = args[1] || arguments[1];
				var z = args[2] || arguments[2];
				return new vec3d(x,y,z);			
				break;
			case 4:
				var w = args[0] || arguments[0];
				var x = args[1] || arguments[1];
				var y = args[2] || arguments[2];
				var z = args[3] || arguments[3];
				return new vec4d(w,x,y,z);
			break;
			default:
				console.log("What?");
				return false;
		}
	}
}

//VEC2D OBJECT
function vec2d(x,y){
	this.x = x;
	this.y = y;
	this.dim = 2
	this.add = function(vector){
		var arr = [];
		arr[0] = this.x + vector.x;
		arr[1] = this.y + vector.y;
		return new vec2d(arr);
	}

	this.dot = function(vector){
		if(EpicVector.sameDim(this,vector)){
			var result = this.x * vector.x;
				result = result + (this.y * vector.y);
			return result;
		}else{console.log("ERROR: VECTORS ARE NOT OF SAME DIM.")}

	}
}

//VEC3D OBJECT
function vec3d(x,y,z){
	this.x = x;
	this.y = y;
	this.z= z;
	this.dim = 3;
	this.add = function(vector){
		var arr = [];
		arr[0] = this.x + vector.x;
		arr[1] = this.y + vector.y;
		arr[2] = this.z + vector.z;
		return new vec3d(arr); 
	}

	this.dot = function(vector){
		if(EpicVector.sameDim(this,vector)){
			var result = this.x * vector.x;
				result = result + (this.y * vector.y);
				result = result + (this.z * vector.z);
			return result;
		}else{console.log("ERROR: VECTORS ARE NOT OF SAME DIM.")}
	}
}

//VEC4D OBJECT
function vec4d(w,x,y,z){
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	this.dim = 4;
	this.add = function(vector){
		var arr = [];
		arr[0] = this.w + vector.w;
		arr[1] = this.x + vector.x;
		arr[2] = this.y + vector.y;
		arr[3] = this.z + vector.z;
		return new vec4d(arr);		
	}

	this.dot = function(vector){
		if(EpicVector.sameDim(this,vector)){
			var result = this.x * vector.x;
				result = result + (this.y * vector.y);
				result = result + (this.z * vector.z);
				result = result + (this.w * vector.w);
			return result;
		}else{console.log("ERROR: VECTORS ARE NOT OF SAME DIM.")}
	}
}

//VECND OBJECT
function vecnd(arr){
	this.components = arr;
	this.dim=arr.length;
	this.add = function(vector){
		var arr = [];
		for(var i = 0, l=this.dim; i<l;i++){
			arr[i] = this.components[i] + vector.components[i];
		}
		return new vecnd(arr);		
	}
	
	this.dot = function(vector){
		if(EpicVector.sameDim(this, vector)){
			var result = 0;
			for(var i = 0, l=this.dim;i<l;i++){
				result = result + (this.components[i]*vector.components[i]);
			}
			return result;
		}else{
			console.log("ERROR: VECTORS ARE NOT OF SAME DIM.")
		}
	}
}
//test

//following should print "{ x: 1, y: 2, dim: 2 ...}"
console.log(EpicVector.create(1,2));
console.log(EpicVector.create([1,2]));

//following should print "{ x: 1, y: 2, z: 3, dim: 3 ...}"
console.log(EpicVector.create(1,2,3));
console.log(EpicVector.create([1,2,3]));

//following should print "{ w: 1, x: 2, y: 3, z: 4, dim: 4 ...}"
console.log(EpicVector.create([1,2,3,4]));
console.log(EpicVector.create(1,2,3,4));

//following should print "{ components: [ 1, 2, 3, 4, 5 ], dim: 5 ...}"
console.log(EpicVector.create(1,2,3,4,5));
console.log(EpicVector.create([1,2,3,4,5]));

//following should print "1"
console.log(EpicVector.create(1)); 
console.log(EpicVector.create([1])); 
