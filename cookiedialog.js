/* 
    Document   : JavaScript
    Created on : 08-May-2012
    Author     : Afis Ajibike | TreatDigital.com
    Description: Treat Digital - Cookies Dialog - EU Directive
*/

/*IMPORTANT: DO NOT FORGET TO CHANGE COOKIE NAME 'Treat_Digital_cookiesAccepted' TO CLIENT'S NAME - 'Client_Name_cookiesAccepted'*/

  $(document).ready(function () {
	$('.cbar').click(function() {
		$('#cdes').slideToggle('slow', function() {
		});
	 });
	 
	 /*Check if cookies has already been accepted for this website*/

	if ($.cookie('Treat_Digital_cookiesAccepted')) 
		 {
			$('#bar').remove();
		 }
	else {
	 /*Set cookie to remove cookie bar when user accepts*/
			$('#acceptCookie').click(function() {
				$.cookie('Treat_Digital_cookiesAccepted', 'true', { expires: 365 });
				$('#bar').remove();
			});
		 }//end if statement
	});//end doc ready