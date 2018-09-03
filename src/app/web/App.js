import Counter from 'components/Counter';
import React from 'react';
import ReactDOM from 'react-dom';

const wrapper = document.getElementById('root');

wrapper ? ReactDOM.render(<Counter />, wrapper) : false;
