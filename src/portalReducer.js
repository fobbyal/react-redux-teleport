import { PORT,CLEAR } from './Constants';

const PortalReducer = (state = {},action ) => {
  let result;
  switch(action.type) {
    case PORT:
      result = { ...state };
      result[action.payload] = 'PORT';
      return result;
    case CLEAR:
      result = { ...state };
      result[action.payload] = 'CLEAR';
      return result;
  }
  return state;
};


export default PortalReducer;
