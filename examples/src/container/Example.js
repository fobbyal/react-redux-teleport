import React from 'react';
import { connect } from 'react-redux';
import { port,clear } from 'react-redux-teleport';

const Example = ({ portToMain,clearMain }) => (
  <div>
    <button onClick={portToMain}> click to port </button>
    <button onClick={clearMain}> click to clear </button>
  </div>
);

const PortContent = () => (
  <div>hello world as port content</div>
);

const mapDispatchToProps = dispatch => ({
  portToMain: () => dispatch(port('main',PortContent)),
  clearMain: () => dispatch(clear('main'))
});

export default connect(null,mapDispatchToProps)(Example);
