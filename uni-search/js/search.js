$(document).ready(function(){
getdata();
})

$('#search').keyup(function(){
getdata();
});

function getdata(){
var search_term = $('#search').val();
$.ajax({
dataType:'jsonp',
url:  "http://nerdeez-server-dev.herokuapp.com/api/v1/university/?format=jsonp",
success: function(data) {
	var len = data.objects.length;
	var text ='';
    for(var i=0;i<len;i++){
     	var obj= data.objects[i].description;
     	if(obj.toLowerCase().indexOf(search_term.toLowerCase())>-1)
     	{
            if (!(data.objects[i].image==null)){
                text += "<div class='row'><div class='span4 result_item'>"
                        +'<img width="200px" src="'+data.objects[i].image+'" />'
                        +"</div></div>";
                }
            else{
                text += "<div class='row'><div class='span4 result_item'>"
                        +obj+"</div></div>";
                }
     	}
     }
       $('#search_results').html(text);
    },
error: function(data, temp){
	console.log('Error');
}
})
}
