import React from 'react';
import { getPortContent } from './portalRegistry';
import { PORT,CLEAR  } from './Constants';
import { connect } from 'react-redux';


const createContent = (wrapper,content) => {

  const element=React.isValidElement(content)?
    content:
    React.createElement(content,null);

  return wrapper ? 
    React.createElement(wrapper,null,element):
    element;
};

export default stateTreeMount => 
  (portalKey,WrapperComponent,visibleInClearState ) => {
  const PortalAnchor = ({ portalState }) => {

    console.debug('rendering portal....');

    const portalContent = getPortContent(portalKey);

    const content = portalContent && portalState === PORT ?  
      createContent(WrapperComponent,portalContent) :
      null;

    return content;
  };


  const mapStateToProps = state => { 
    let portalState = state[stateTreeMount][portalKey];
    portalState = portalState ? portalState : 'CLEAR';
    return { portalState };
  };

  return connect(mapStateToProps)(PortalAnchor);
};

