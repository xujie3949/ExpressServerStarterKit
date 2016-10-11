import { spyObject, restoreSinonObject } from '../testHelper';
import { error, success } from '../../src/utils/responseJSON';

describe('responseJSON测试用例', () => {
  describe('error方法测试', () => {
    it('应该返回正确的error结构', () => {
      const errorObj = error(-1, 'error');
      expect(errorObj).to.deep.equal({
        errcode: -1,
        msg: 'error',
      });
    });

    it('应该设置msg参数默认值为error', () => {
      const errorObj = error(-1);
      expect(errorObj).to.deep.equal({
        errcode: -1,
        msg: 'error',
      });
    });
  });

  describe('success方法测试', () => {
    it('应该返回正确的success结构', () => {
      const successObj = success('success', 'data');
      expect(successObj).to.deep.equal({
        errcode: 0,
        msg: 'success',
        data: 'data',
      });
    });

    it('应该设置data参数默认值为null', () => {
      const successObj = success('success');
      expect(successObj).to.deep.equal({
        errcode: 0,
        msg: 'success',
        data: null,
      });
    });
  });
});
