import { Router } from 'express';

const module1 = new Router();

/* GET users listing. */
module1.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

export default module1;
