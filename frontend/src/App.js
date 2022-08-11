import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import Registration from './pages/Registration';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgot-password';
import Contact from './pages/Contact';
import AboutUs from './pages/About-us';
import Jobs from './pages/Jobs';
import JobDetails from './pages/Job-details';
import CompanyDetails from './pages/Company-details';
import Blog from './pages/Blog';
import BlogDetails from './pages/Blog-details';
import CandidateDetails from './pages/Candidate-details';
import EditCandidateDetails from './pages/Edit-candidate-details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                
          <Route path='/' element={ <Index /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/forgot-password' element={ <ForgotPassword /> } />
          <Route path='/contact-us' element={ <Contact /> } />
          <Route path='/about-us' element={ <AboutUs /> } />
          <Route path='/jobs' element={ <Jobs /> } />
          <Route path='//jobs/search' element={ <Jobs /> } />
          <Route path='/jobs/:id' element={ <Jobs /> } />
          <Route path='/job-details/:id' element={ <JobDetails /> } />
          <Route path='/company-details/:id' element={ <CompanyDetails /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/blog/:cat_id' element={ <Blog /> } />
          <Route path='/blog-details/:id' element={ <BlogDetails /> } />
          <Route path='/candidate-details/:id' element={ <CandidateDetails /> } />

          <Route path='/edit-candidate/:id' element={ <EditCandidateDetails /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
