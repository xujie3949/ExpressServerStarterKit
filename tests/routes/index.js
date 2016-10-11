import { spyObject, restoreSinonObject } from '../testHelper';
import setupRoute from '../../src/routes/index';
import app from '../../src/app';
import module1 from '../../src/routes/module1';

describe('setupRoute测试用例', () => {
  let sinonObj = null;

  beforeEach(() => {
    sinonObj = {};

    sinonObj.use = sinon.stub(app, 'use');
  });

  afterEach(() => {
    restoreSinonObject(sinonObj);
  });

  it('应该添加module1路由', () => {
    setupRoute(app);
    expect(sinonObj.use.calledWith('/module1', module1)).to.be.true;
  });
});

