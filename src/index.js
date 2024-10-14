import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './ADMIN/Registration';
import ClientReg from './ADMIN/ClientReg';
import Project from './ADMIN/Project';
import Invite from './ADMIN/Invite';
import ClientFeedback from './ADMIN/ClientFeedback';
import Reports from './ADMIN/Reports';
import Leave from './ADMIN/Leave';
import Home from './ADMIN/Home';
import Dashboard from './ADMIN/Dashboard';
import Managerhome from './MANAGER/Managerhome';
import Developers from './MANAGER/Developers';
import ApplyLeave from './ApplyLeave';
import Messages from './Messages';
import ManagerDashboard from './MANAGER/ManagerDashboard';
import Devhome from './Developer/Devhome';
import Devproject from './Developer/Devproject';
import Devdashboard from './Developer/Devdashboard';
import ClientHome from './Client/ClientHome';
import ClientDashboard from './Client/ClientDashboard';
import AdminSide from './ADMIN/AdminSide';
import ManagerSide from './MANAGER/ManagerSide';
import DeveloperSide from './Developer/DeveloperSide';
import ClientSide from './Client/ClientSide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='applyleave' element={<ApplyLeave />} />
      <Route path='login' element={<Login />} />

      
        {/* Admin Routes */}
        <Route path='/' element={<AdminSide />}>
          <Route index element={<Home />} />
          <Route path='messages' element={<Messages />} />
          <Route path='registration' element={<Registration />} />
          <Route path='clientreg' element={<ClientReg />} />
          <Route path='createproject' element={<Project />} />
          <Route path='invite' element={<Invite />} />
          <Route path='feedback' element={<ClientFeedback />} />
          <Route path='reports' element={<Reports />} />
          <Route path='leave' element={<Leave />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

        {/* Manager Routes */}
        <Route path='manager' element={<ManagerSide />}>
        <Route index element={<Managerhome />} />
        <Route path='developers' element={<Developers />} />
        <Route path='managerdashboard' element={<ManagerDashboard />} />
        
        </Route>
        {/* Developer Routes */}
        <Route path='developer' element={<DeveloperSide />}>
        <Route index element={<Devhome />} />
        <Route path='devproject' element={<Devproject />} />
        <Route path='devdashboard' element={<Devdashboard />} />
        </Route>

        {/* Client Routes */}
        <Route path='client' element={<ClientSide />} >
        <Route index element={<ClientHome />} />
        <Route path='clientdash' element={<ClientDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
