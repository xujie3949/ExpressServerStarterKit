import module1 from './module1';

function setupRoute(app) {
  app.use('/module1', module1);
}

export default setupRoute;
