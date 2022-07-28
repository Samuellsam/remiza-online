import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example1 from './pages/Example1';
import Example2 from './pages/Example2';

const App: React.FunctionComponent = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Example1" element={<Example1 />}></Route>
          <Route path="Example2" element={<Example2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
