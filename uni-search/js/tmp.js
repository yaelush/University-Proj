

$('#search').keyup(function(){
var search_term = $('#search').val();
alert(search_term);

$.ajax({
url:'http://nerdeez-server-dev.herokuapp.com/api/v1/university/?format=json',
dataType:"xml",
success: function(data){
	$(data).find("objects").each(function(){
		var info = '<br/>' + $(this).find("description").text();
	$('#search_results').append(info);
	})
}
})

}) ;