# API REST TEST HAIP

## Libraries an dependencies most important of this project
[Express](https://expressjs.com/es/)
[Mongoose](https://mongoosejs.com/)
[babel](https://babeljs.io/)
[dotenv](https://www.npmjs.com/package/dotenv)
---

# SETUP

## 1) Install dependencies

```bash
npm install
```

### 2) Create in the root the .env file and paste this code:

```js
PORT=YOUR_PORT
DB_HOST='mongodb://localhost:27017/YOUR_DATABASE'
```

## Run Local
```bash
npm run start-dev
```

## Run Production
```bash
npm start
```
## Testing

### Users
1. getUsers METHOD GET http://YOUR_HOST:YOUR_PORT/api/v1/users
2. getUser METHOD GET http://YOUR_HOST:YOUR_PORT/api/v1/user/:userId

