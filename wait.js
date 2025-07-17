// This file was moved to src/wait.js as part of project restructuring.
// Please use src/wait.js for the latest code.

function waitForMSG(filename){

	 $.ajax({
		url: urlPath + "obsResult.php",
		dataType: 'json',
		async: true,
		timeout:150000,
		cache: false,
		data: { filename: filename },
		success: function(data) {
			if(data == null){
				setTimeout(function(){ waitForMSG(filename)}, 10000);
			}
			else{
				 if(parseInt(data.obs.length) == 0 ){
					  setDisplayTime();
					  loading(false);
					  setTimeout(function(){
					  $.colorbox({href: urlPath + "nohazard.php", onLoad: function() { $('#cboxClose').show();},onClosed:function(){ $('#cboxClose').hide();}});
					  }, 1000);
				 }
				 else{
					createMap(data);
					loading(false);
				 }
			}
		},
		error: function(data){
			setTimeout(function(){ waitForMSG(filename)}, 10000);
		}
	}); //end ajax
}//return filename
