# Javascript Developer Blog
Blog yang berisi log perjalanan seorang newbie JS developer mengarungi luasnya samudra JavaScript :D

### Tech Stack
Maka dari itu, blog inipun di bangun dengan teknologi JavaScript :

#### Back-end :
- ExpressJS
- MongoDB
- Mongoose
- PassportJS

#### Front-end :
- VueJS
- Axios
- Vue Router
- ElementFE

### Developement workflow

#### Release 0

- Documentation
  - Description
  - Step-by-step development
  - List of API Endpoint

#### Release 1

- Express + CORS setup
- Setup dotdev
- Setup Mongoose
- Setup Passport + Passport Local
- Setup jsonwebtoken
- Login
- Register

#### Release 2

- CRUD Article + Integrate with User

#### Release 3

- Create Front-end interface.

#### Release 4

- Validation
  - Server side
  - Client side

#### Refactoring

### API Endpoint

#### Auth API

Routes | HTTP | Description
--- | --- | ---
**/api/register** | `POST` | Register a new user
**/api/login** | `POST` | User sign in and get credetial token after login

#### Article API

Routes | HTTP | Description
--- | --- | ---
**/api/articles** | `GET` | Get all article
**/api/articles/:id** | `GET` | Get Single article
**/api/articles/slug/:slug** | `GET` | Get Single article by slug
**/api/articles/** | `POST` | Create an article
**/api/articles/:id** | `DELETE` | Delete an article (only author)
**/api/articles/:id** | `PUT` | Update data of a article (only author)

#### Home API

Routes | HTTP | Description
--- | --- | ---
**/api/home** | `GET` | Get all article and detail author for homepage

### Setup guide

#### Front-end
```
cd client
npm install
npm run dev

open http://localhost:8010
```

#### Back-end
```
cd server
npm install
cp .env.example .env
configure the credential at .env
npm run dev <- you need nodemon to use it

run on http://localhost:3000
```
