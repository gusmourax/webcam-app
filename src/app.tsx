import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebCamComponent from './components/WebCamComponent';

import './index.css';

function render() {
    ReactDOM.render(<WebCamComponent />, document.body);
}

render();