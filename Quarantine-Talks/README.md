# Quarantine-Talks
This is a flask based web application for online group chatting with anonymity, deployed on Heroku. Users can visit this website to participate in the onging chat with a nickname they chooses for themselves. User identitity remains anonymous and during chatting, no one knows who is on the other end. No user or chat related data is stored on server. This web application was developed during the lockdown period of COVID-19, and thats how this got its name.

**Link to the website** : https://quarantine-talks.herokuapp.com/

**Tools/Framework used** : Flask, Javascript, WebSocketIO, HTML, CSS, Gunicorn

### How to run
1) Install all the dependencies  : pip install -r requirements.txt
2) Run the server file : python3 server.py
3) Open the host link in your browser

### Directory Structure:

  -> static 

    -> css : Contains the application.css file for styling
  
    -> fonts : Contains the glypicons icons
  
    -> js : Contains the javascript files. chat.js and login.js
  
-> template : Contains the static HTML files- chat.html and login.html

-> server.py : Flask server main file

-> runtime.txt : Runtime enviorment to be specified for Heroku deployment

-> Procfile : Server WSGI execution code for Heroku deployment

-> requirements.txt : All the dependecies and requriement specifications
