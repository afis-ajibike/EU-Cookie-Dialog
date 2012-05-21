INSTALLATION

Code explained:

CSS
The CSS file (style.css) contains the styling for the dialog box.
Copy the CSS in style.css to the main css file of site you are working on.

JS
jquery.cookie.js is a simple, lightweight jQuery plugin for reading, writing and deleting cookies.
cookiedialog.js is a simple plugin that will set a cookie when a user clicks the button to accept the use of cookies. It will check if the acceptance cookie have already been set for a website and remove the dialog box.
Installation:
 <script src="jquery.cookie.js"></script>
 <script src="cookiedialog.js"></script>
the above will go in your <head> tag of the main template(s). Don’t forget to include after the jQuery library.
IMPORTANT: DO NOT FORGET TO CHANGE COOKIE NAME in cookiedialog.js FROM 'Treat_Digital_cookiesAccepted' TO CLIENT'S NAME - 'Client_Name_cookiesAccepted'.

HTML
This is the dialogue box to alert the user of the new Cookies page. See cookies-dialog.html.
Copy the dialog box html and paste just before the </body> tag.