//----------------------------------------8. Even or Odd

function oddEven () {
	for (var counter = 1; counter < 16; counter++) {

	    if (counter % 2 == 0) {
	      console.log(counter + " is even");  
	    } else {

	      console.log(counter + " is odd");  
	    }
	}
}
oddEven();




function evenOdd () {

	for (i = 1; i < 15; i++) {
		if (i % 2 ==0) {
   			console.log("This is even number " + i);
   		} else {
    		console.log("This is odd number " + i);

		}	
	}
}

evenOdd();



function oddOrEven(15){
  		for (i = 1; i < 15; i++) {
	        if(i % 2 == 0)
	            return "even";
	        return "odd";
	    }
    }
oddOrEven(i);