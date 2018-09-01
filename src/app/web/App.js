import React from 'react';
import ReactDOM from 'react-dom';

import Counter from 'components/Counter';

const wrapper = document.getElementById("root");

wrapper ? ReactDOM.render(<Counter />, wrapper) : false;
