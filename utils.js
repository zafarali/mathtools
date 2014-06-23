/*
Collection of utilities for javascript
*/
var arrayUtils = {
	isArray: function(toTest){
		return Object.prototype.toString.call(toTest)==='[object Array]';
	}
}