EU-Cookie-Dialog
=================

Following a revised EU directive on website cookies, each company based, or doing business, in the EU is required to notify users about the cookies used on their website.

This is a practical example of a non intrusive dialogue implementation.

Use this plugin to gain consent through the use of a Dialogue box. This could be shown on the homepage or on each page where a visitor has not opted in to Cookies the site sets.

##INSTALLATION

<h3>Code explained:</h3>

<h3>CSS</h3>
The CSS file (style.css) contains the styling for the dialog box.
Copy the CSS in style.css to the main css file of site you are working on.

<h3>JS</h3>
<strong>jquery.cookie.js</strong> is a simple, lightweight jQuery plugin for reading, writing and deleting cookies.
<br/>
<strong>cookiedialog.js</strong> is a simple plugin that will set a cookie when a user clicks the button to accept the use of cookies. 
It will check if the acceptance cookie have already been set for a website and remove the dialog box.
<h4>Installation:</h4>
```javascript
 <script src="jquery.cookie.js"></script>
 <script src="cookiedialog.js"></script>
```
the above will go just before ```</body>``` tag of the main template(s). Don’t forget to include after the jQuery library.
<br/>
<strong>IMPORTANT: DO NOT FORGET TO CHANGE COOKIE NAME in cookiedialog.js FROM 'Treat_Digital_cookiesAccepted' TO CLIENT'S NAME - 'Client_Name_cookiesAccepted'.</strong>

<h3>HTML</h3>
This is the dialogue box to alert the user of the new Cookies page. See cookies-dialog.html.
Copy the dialog box html and paste before the ```</body>``` tag.

<h3>Author</h3>
Afis Ajibike
