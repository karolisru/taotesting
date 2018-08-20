$(document).ready(function(){
	var testTakers = [];
	
	$.getJSON('rest.php', function(data, err) {
	  if (err !== "success") {
		alert('Something went wrong: ' + err);
	  } else {
		testTakers = data;
		
		const count = testTakers.length;
		var content = "<table cellspacing=\"0\">"
			content += '<thead><th>Pic</th><th>Email</th><th>Title</th><th>Firstname</th><th>Lastname</th><th>Gender</th><th>Login</th><th>Password</th><th>Address</th></thead><tbody>';
		for(i=0; i<count; i++){
			console.log(testTakers[i]);
			content += '<tr>';
			content += '<td><img src="' + testTakers[i].picture + '"/></td>';
			content += '<td>' + testTakers[i].email + '</td>';
			content += '<td>' + testTakers[i].title + '</td>';
			content += '<td>' + testTakers[i].firstname + '</td>';
			content += '<td>' + testTakers[i].lastname + '</td>';
			content += '<td>' + testTakers[i].gender + '</td>';
			content += '<td>' + testTakers[i].login + '</td>';
			content += '<td>' + testTakers[i].password + '</td>';
			content += '<td>' + testTakers[i].address + '</td>';
			content += '</tr>';
		}
		content += "</tbody></table>"

		$('#table').append(content);
	  }
	});
});