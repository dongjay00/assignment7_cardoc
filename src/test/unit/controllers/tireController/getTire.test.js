const httpMocks = require('node-mocks-http');

const tireController = require('../../../../controllers/tireController');
const tireService = require('../../../../services/tireService');
const statusCode = require('../../../../globals/statusCode');
const tokenDTO = require('../../../data/dto/token.json');

tireService.readTireList = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('getTire 단위 테스트', () => {
  beforeEach(() => {
    req.decoded = tokenDTO;
  });

  it('tireController에 readTireList이 존재하는가?', () => {
    expect(typeof tireController.readTireList).toBe('function');
  });

  it('tireController의 readTireList에서 service의 readTireList를 호출하는가?', async () => {
    await tireController.readTireList(req, res, next);
    expect(tireService.readTireList).toBeCalled();
  });

  it('tireController의 readTireList에서 상태 코드를 200을 넘겨주는가?', async () => {
    tireService.readTireList.mockReturnValue({
      id: 9,
      name: '타이어 전',
      width: 195,
      aspectRatio: 55,
      diameter: 15,
      unit: '',
      multiValues: '',
      trimId: 8000,
      userId: 'testuser',
    });
    await tireController.readTireList(req, res, next);
    expect(res.statusCode).toBe(statusCode.OK);
  });
});
