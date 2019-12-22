var url ="https://edward2.solent.ac.uk/~wad1941/assesment";

$('#btnGo').click(function(){
        var string = $('#txtQuery').val();
        alert( string );
        //window.location = string;
        //var myWindow =window.open(string,'_self');
    });

$('#btnAll').click(function(){
	var string = "allAcom";
	$('#txtQuery').val(url + string);
});

$('#btnLoc').click(function(){
	var string = "/allAcom/Hampshire";
	$('#txtQuery').val(url + string);
});

$('#btnType').click(function(){
	var string = "/allAcom/Hampshire/type/hotel";
	$('#txtQuery').val(url + string);
});

