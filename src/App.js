import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/counter';  
import Form from './components/Form'; 
import Toggle from './components/Toggle';
import UserProfile from './components/Userprofile';
import UserData from './components/Name';
import WebSocketExample from './components/Websocket';
import DocumentTitleUpdater from './components/Document';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/counter" element={<Counter />} /> 
          <Route path="/form" element={<Form />} /> 
          <Route path="/toggle" element={<Toggle />} /> 
          <Route path="/user" element={<UserProfile />} /> 
          <Route path="/user1" element={<UserData />} /> 
          <Route path="/web" element={<WebSocketExample />} />
          <Route path="/doc" element={<DocumentTitleUpdater />} /> 
     
          



        </Routes>
      </div>
    </Router>
  );
};

export default App;
