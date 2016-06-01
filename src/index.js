import { PORT,CLEAR } from './Constants';
import { registerPortContent } from './portalRegistry';
import _portalReducer from './portalReducer';
import _createPortal from './createPortal';

export const port = 
  ( key,PortContent )  => { 
  registerPortContent(key,PortContent);
  return { type:PORT,payload:key } ;
};

export const clear = 
  key  => ( { type:CLEAR,payload:key } ) ;

export const createPortal = _createPortal('reduxProtal');

export const portalReducer = _portalReducer;

