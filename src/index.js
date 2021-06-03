import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './counter';


import './index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={5}/>, divRoot);