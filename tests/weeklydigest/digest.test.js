import { readTemplate, getMappedDays } from '../../src/digest/helpers';
const QUERY_DAYS_OK = [
  '1:0,2:1,1:3,1:2',
  '2:0,2:1,1:3',
  '5:0',
  '4:2,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3'
]

const RESULT_OK = [[{"coef": 20, "color": "#000"}, {"coef": 40, "color": "#FF3666"}, {"coef": 20, "color": "#EDEFF2"}, {"coef": 20, "color": "#FFC800"}], [{"coef": 40, "color": "#000"}, {"coef": 40, "color": "#FF3666"}, {"coef": 20, "color": "#EDEFF2"}], [{"coef": 100, "color": "#000"}], [{"coef": 80, "color": "#FFC800"}, {"coef": 20, "color": "#EDEFF2"}], [{"coef": 40, "color": "#12D600"}, {"coef": 20, "color": "#FF3666"}, {"coef": 20, "color": "#5E40DD"}, {"coef": 20, "color": "#EDEFF2"}], [{"coef": 40, "color": "#12D600"}, {"coef": 20, "color": "#FF3666"}, {"coef": 20, "color": "#5E40DD"}, {"coef": 20, "color": "#EDEFF2"}], [{"coef": 40, "color": "#12D600"}, {"coef": 20, "color": "#FF3666"}, {"coef": 20, "color": "#5E40DD"}, {"coef": 20, "color": "#EDEFF2"}]]
const QUERY_DAYS_CASE_0 = [
  '1:0,2:1,1:2,1:3',
  '2:0,2:1,1:3',
  '5:0',
  '4:2,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3'
]
const QUERY_DAYS_CASE_1 = [
  '2:1,6:2,0:3,1:4,1:5',
  '1:1,4:2,0:3,2:4,1:5',
  '0:1,1:2,0:3,2:4,2:5',
  '0:1,0:2,0:3,1:4,0:5',
  '0:1,0:2,0:3,0:4,0:5',
  '0:1,0:2,0:3,0:4,0:5',
  '0:1,0:2,0:3,0:4,0:5'
]

describe('dummyTest', () => {
  test('dummyTest', () => {
    const days = getMappedDays(QUERY_DAYS_OK)
    expect(days).toEqual(RESULT_OK);
  });
});
