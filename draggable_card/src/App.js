import React from 'react';
import './App.css';

import VerticalDragList from './components/vertical-dnd';

function App() {
  return (
    <div className="App">

      <h3>Single Vertical List</h3>
      <VerticalDragList />

    </div>
  );
}

export default App;