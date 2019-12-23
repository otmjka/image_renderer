import mockdate from 'mockdate';
import parse from 'date-fns/parse';

jest.setTimeout(60000);

mockdate.set(parse('2018-10-31T00:00:00Z'));

jest.mock('../src/common/amqpChannel');
jest.mock('../src/common/jwtSecret');
jest.mock('../src/common/casbinEnforcerAsync');
