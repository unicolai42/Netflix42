# Netflix42

### Purpose
```
Create an Netflix like from scratch.

Implement all films from Pop Corn Time in the database.

Mobile first responsive website.
```

### Team
```
unicolai42
kahantar
gdufay
```

### Language
```
The backend is in Node JS / Express JS

The frontend is in React/Redux and Sass

The database is in postgresql
```

### Result

<p align='center'><img src="https://media.giphy.com/media/328B3WTbxrvn5HkDIH/giphy.gif" alt='netflix42'/></p>
<p align='center'><i>Sign up + Choose film</i></p>
<br/>
<br/>
<p align='center'><img src="https://media.giphy.com/media/Y4qx3ntmrG9DKovff7/giphy.gif" alt='netflix42'/></p>
<p align='center'><i>Watching movie + comment</i></p>
<br/>

### Installation

Install the project on your computer (open your terminal then paste this) :
```
git clone https://github.com/unicolai42/Netflix42.git Netflix42
```

Install postgresql and open it :
```
brew install postgresql

psql postgres
```

Create a database and close psql:
```
CREATE DATABASE database_development;

quit;
```

Download the database:
```
cd backend/scraping

node ScrapPopCornTime.js

```

Launch the server (open 2 terminals):
```
Terminal 1 :

cd backend
npm install
npm start


Terminal 2 :

cd frontend
npm install
npm start
```

Open the project in your Navigator :
```
http://localhost:3000 (Paste this in the url)
```
