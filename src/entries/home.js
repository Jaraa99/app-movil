import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';

import data from '../api.json';

const modalContainer = document.getElementById('home-container');
ReactDOM.render(<Home data={data} />, modalContainer);