import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import PrivateComponent from './components/PrivateComponent';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import AllAppliedJobs from './pages/All-applied-jobs';
import EmployesList from './pages/Employes-list';
import CandidateDetails from './pages/Candidate-details';
import ManageQualifications from './pages/Manage-qualifications';
import AddNewQualification from './pages/Add-new-qualification';
import EditQualification from './pages/Edit-qualification';
import EmployersList from './pages/Employers-list';
import SingleEmployersDetails from './pages/Single-employers-details';
import SingleJobDetails from './pages/Single-job-details';
import ManageCompanyDomains from './pages/Manage-company-domains';
import AddNewCompanyDomain from './pages/Add-new-company-domain';
import EditCompanyDomain from './pages/Edit-company-domain';
import AllJobLists from './pages/All-job-lists';
import ManageJobCategories from './pages/Manage-job-categories';
import AddNewJobCategories from './pages/Add-new-job-categories';
import EditJobCategory from './pages/Edit-job-category';
import ManageJobDomains from './pages/Manage-job-domains';
import AddNewMainJobDomain from './pages/Add-new-main-job-domain';
import EditMainJobDomain from './pages/Edit-main-job-domain';
import ManageNoticePeriods from './pages/Manage-notice-periods';
import AddNewNoticePeriod from './pages/Add-new-notice-period';
import EditNoticePeriod from './pages/Edit-notice-period';
import ManageFeeChargeReasons from './pages/Manage-fee-charge-reasons';
import AddNewFeeChargeReason from './pages/Add-new-fee-charge-reason';
import EditFeeChargeReason from './pages/Edit-fee-charge-reason';
import ManageWorkingDays from './pages/Manage-working-days';
import AddNewWorkingDay from './pages/Add-new-working-day';
import EditWorkingDay from './pages/Edit-working-day';
import ManageWorkExperiance from './pages/Manage-work-experiance';
import AddNewWorkExperiance from './pages/Add-new-work-experiance';
import EditWorkExperiance from './pages/Edit-work-experiance';
import ManageStates from './pages/Manage-states';
import AddNewState from './pages/Add-new-state';
import EditState from './pages/Edit-state';
import ManageCities from './pages/Manage-cities';
import AddNewCity from './pages/Add-new-city';
import EditCity from './pages/Edit-city';
import ManageRole from './pages/Manage-role';
import AddNewRole from './pages/Add-new-role';
import EditRole from './pages/Edit-role';
import ManageAdminAccount from './pages/Manage-admin-account';
import AddNewAdminAccount from './pages/Add-new-admin-account';
import EditAdminAccount from './pages/Edit-admin-account';
import ContactUsEmails from './pages/Contact-us-emails';
import AboutUs from './pages/About-us';
import ContactUs from './pages/Contact-us';
import BlogLists from './pages/Blog-lists';
import AddNewBlog from './pages/Add-new-blog';
import EditBlog from './pages/Edit-blog';
import ManageBlogCategories from './pages/Manage-blog-categories';
import AddNewBlogCategory from './pages/Add-new-blog-category';
import EditBlogCategory from './pages/Edit-blog-category';
import ManageBlogAuthors from './pages/Manage-blog-authors';
import AddNewBlogAuthor from './pages/Add-new-blog-author';
import EditBlogAuthor from './pages/Edit-blog-author';
import PrivateComponent from './components/PrivateComponent';


function App() {

  //const navigate = useNavigate();

  //get item from local storage
  //const auth = localStorage.getItem('react_user');
  
  return (
    <div className="App">
      <BrowserRouter>

          <Routes>
            
            <Route element={<PrivateComponent />}>
              <Route path='/dashboard' element={ <Dashboard /> }/>

              <Route path='/all-applied-jobs' element={ <AllAppliedJobs /> }/>

              <Route path='/employes-list' element={ <EmployesList /> }/>
              <Route path='/candidate-details/:id' element={ <CandidateDetails /> }/>

              <Route path='/manage-qualifications' element={ <ManageQualifications /> }/>
              <Route path='/add-new-qualification' element={ <AddNewQualification /> }/>
              <Route path='/edit-qualification/:id' element={ <EditQualification /> }/>

              <Route path='/employer-details/:id' element={ <SingleEmployersDetails /> }/>
              <Route path='/employers-list' element={ <EmployersList /> }/>
              <Route path='/job-details/:id' element={ <SingleJobDetails /> }/>
              
              <Route path='/manage-company-domains' element={ <ManageCompanyDomains /> }/>
              <Route path='/add-new-company-domain' element={ <AddNewCompanyDomain /> }/>
              <Route path='/edit-company-domain/:id' element={ <EditCompanyDomain /> }/>
              
              <Route path='/all-job-lists' element={ <AllJobLists /> }/>

              <Route path='/manage-job-categories' element={ <ManageJobCategories /> }/>
              <Route path='/add-new-job-categories' element={ <AddNewJobCategories /> }/>
              <Route path='/edit-job-category/:id' element={ <EditJobCategory /> }/>

              <Route path='/manage-job-domains' element={ <ManageJobDomains /> }/>
              <Route path='/add-new-main-job-domain' element={ <AddNewMainJobDomain /> }/>
              <Route path='/edit-main-job-domain/:id' element={ <EditMainJobDomain /> }/>

              <Route path='/manage-notice-periods' element={ <ManageNoticePeriods /> }/>
              <Route path='/add-new-notice-period' element={ <AddNewNoticePeriod /> }/>
              <Route path='/edit-notice-period/:id' element={ <EditNoticePeriod /> }/>

              <Route path='/manage-fee-charge-reasons' element={ <ManageFeeChargeReasons /> }/>
              <Route path='/add-new-fee-charge-reason' element={ <AddNewFeeChargeReason /> }/>
              <Route path='/edit-fee-charge-reason' element={ <EditFeeChargeReason /> }/>

              <Route path='/manage-working-days' element={ <ManageWorkingDays /> }/>
              <Route path='/add-new-working-day' element={ <AddNewWorkingDay /> }/>
              <Route path='/edit-working-day' element={ <EditWorkingDay /> }/>

              <Route path='/manage-work-experiance' element={ <ManageWorkExperiance /> }/>
              <Route path='/add-new-work-experiance' element={ <AddNewWorkExperiance /> }/>
              <Route path='/edit-work-experiance' element={ <EditWorkExperiance /> }/>

              <Route path='/states' element={ <ManageStates /> }/>
              <Route path='/add-new-state' element={ <AddNewState /> }/>
              <Route path='/edit-state' element={ <EditState /> }/>

              <Route path='/cities' element={ <ManageCities /> }/>
              <Route path='/add-new-city' element={ <AddNewCity /> }/>
              <Route path='/edit-city' element={ <EditCity /> }/>

              <Route path='/manage-role' element={ <ManageRole /> }/>
              <Route path='/add-new-role' element={ <AddNewRole /> }/>
              <Route path='/edit-role' element={ <EditRole /> }/>

              <Route path='/manage-admin-account' element={ <ManageAdminAccount /> }/>
              <Route path='/add-new-admin-account' element={ <AddNewAdminAccount /> }/>
              <Route path='/edit-admin-account' element={ <EditAdminAccount /> }/>

              <Route path='/contact-us-emails' element={ <ContactUsEmails /> }/>

              <Route path='/about-us' element={ <AboutUs /> }/>
              
              <Route path='/contact-us' element={ <ContactUs /> }/>

              <Route path='/blog-lists' element={ <BlogLists /> }/>
              <Route path='/add-new-blog' element={ <AddNewBlog /> }/>
              <Route path='/edit-blog' element={ <EditBlog /> }/>

              <Route path='/manage-blog-categories' element={ <ManageBlogCategories /> }/>
              <Route path='/add-new-blog-category' element={ <AddNewBlogCategory /> }/>
              <Route path='/edit-blog-category' element={ <EditBlogCategory /> }/>

              <Route path='/manage-blog-authors' element={ <ManageBlogAuthors /> }/>
              <Route path='/add-new-blog-author' element={ <AddNewBlogAuthor /> }/>
              <Route path='/edit-blog-author' element={ <EditBlogAuthor /> }/>
            </Route>
          </Routes>

        

          <Routes>
            
            <Route path='/' element={ <Index /> } />

          </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
