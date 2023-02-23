<h1>ArticleHub CRUD App</h1>

<h2>Overview</h2>
<p>This project is a simple CRUD application for adding, deleting, and updating articles or blogs that contain a title and a description. It is implemented using React for the frontend and Django Rest Framework for the backend. The app also has user login and register functionality, where every user has their unique token. The app saves user's login session by using cookies.</p>
<br/>
<h2>To run:</h2>
<ol>
    <li>You must have  <a href="https://docs.docker.com/get-docker/">Docker</a> and <a href="https://docs.docker.com/compose/install/">Docker-Compose</a> installed</li>
    <li>Clone the repository and navigate to the root directory</li>
    <li>Run: <code>docker-compose build</code></li>
    <li>Run: <code>docker-compose up -d</code></li>
    <li>Navigate to http://localhost:3000</li>
</ol>
<br/>
<h2>Technologies Used</h2>
<h3>Frontend</h3>
<ul>
    <li>ReactJS</li>
    <li>CSS</li>
    <li>Bootstrap</li> 
</ul>

<h3>Backend</h3>
<ul>
    <li>Django/ Django Rest Framework</li>
    <li>LiteSQL</li>
    <li>REST API</li>
</ul>

<h3>Endpoints</h3>
<ul>
    <li>GET /api/articles: Retrieves all articles</li>
    <li>POST /api/articles: Adds a new article</li>
    <li>GET /api/articles/:id: Retrieves a specific article</li>
    <li>PUT /api/articles/:id: Updates a specific article</li>
    <li>DELETE /api/articles/:id: Deletes a specific article</li>
</ul>
<br/>
<h2>Current Status</h2>
<p>This project is still under development. I am currently working on adding CI/CD pipelines, deploying it, and applying DevOps practices to improve my DevOps skills.
</p>
<br/>
<h2>Installation</h2>
<h3>Prerequisites</h3>
<ul>
Node.js
Python 3.x
Installation Steps
Clone the repository
Install the required packages for the frontend by running npm install
Install the required packages for the backend by running pip install -r requirements.txt
Start the frontend server by running npm start
Start the backend server by running python manage.py runserver
</ul>
