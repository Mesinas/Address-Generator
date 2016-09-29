$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = [" "];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];
	var houseNumber = ['123', '321', '456', '987'];
	var zipCode = [ '90813', '90806', '90807', '90802', '90825'];


	$('button#makeAddress').click(function(){

		var streetRandom = ( Math.floor( Math.random() * streets.length ) );
		var streetName = streets[streetRandom];

		var typesRandom = ( Math.floor( Math.random() * types.length ) );
		var streetType = types[typesRandom];

		var statesRandom = ( Math.floor( Math.random() * states.length) );
		var stateName = states[statesRandom];

		var citiesRandom = ( Math.floor( Math.random() * cities.length ) );
		var citiesName = cities[citiesRandom];

		var zipRandom = ( Math.floor( Math.random() * zipCode.length ) );
		var zipName = zipCode[zipRandom];

		var houseRandom = (Math.floor( Math.random() * houseNumber.length ) );
		var housename = houseNumber[houseRandom];

		console.log(streetName);
		console.log(streetType);
		console.log(stateName);
		console.log(citiesName);
		console.log(housename);
		console.log(zipName);

		$('address.destination').html( housename + ' ' + streetName + ' ' + streetType + '<br/>' );
		$('address.destination').append( citiesName + ', ' + stateName + ' ' + zipName );

	});

});
