const httpMocks = require('node-mocks-http');

const trimController = require('../../../../controllers/trimController');
const trimService = require('../../../../services/trimService');
const tireService = require('../../../../services/tireService');

const postTrimDTO = require('../../../data/dto/postTrim.json');
const tokenDTO = require('../../../data/dto/token.json');

const { RequestOverflowError } = require('../../../../utils/errors/trimError');
const {
  EmptyTireValueError,
  InvalidTireValueError,
} = require('../../../../utils/errors/tireError');

const statusCode = require('../../../../globals/statusCode');

trimService.createTrim = jest.fn();
tireService.createTire = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('postTrim 단위 테스트', () => {
  beforeEach(() => {
    req.body = postTrimDTO;
    req.decoded = tokenDTO;
  });

  it('trimController에 createTrimTire가 존재하는가?', () => {
    expect(typeof trimController.createTrimTire).toBe('function');
  });

  it('trimController의 createTrimTire에서 service의 createTrim을 호출하는가?', async () => {
    await trimController.createTrimTire(req, res, next);
    expect(trimService.createTrim).toBeCalled();
  });

  it('trimController의 createTrimTire에서 service의 createTire을 호출하는가?', async () => {
    await trimController.createTrimTire(req, res, next);
    expect(tireService.createTire).toBeCalled();
  });

  it('trimController의 createTrimTire에서 상태 코드를 201을 넘겨주는가?', async () => {
    await trimController.createTrimTire(req, res, next);
    expect(res.statusCode).toBe(statusCode.CREATED);
  });

  it('trimController의 createTrimTire에서 최대 요청 범위를 벗어나면 에러를 호출하는가?', async () => {
    req.body = {
      informations: [{}, {}, {}, {}, {}, {}],
    };
    const errorMessage = new RequestOverflowError();
    await trimController.createTrimTire(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });

  it('trimController의 createTrimTire에서 타이어 규격 정보가 비었을 때 에러를 호출하는가?', async () => {
    req.body = {
      informations: [
        {
          id: 'testuser',
          trimId: 100,
        },
      ],
    };
    const errorMessage = new EmptyTireValueError();
    await trimController.createTrimTire(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });

  it('trimController의 createTrimTire에서 타이어 규격 양식이 맞지 않는 경우 에러를 호출하는가?', async () => {
    req.body = {
      informations: [
        {
          id: 'testuser',
          trimId: 10000,
        },
      ],
    };
    const errorMessage = new InvalidTireValueError();
    await trimController.createTrimTire(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
