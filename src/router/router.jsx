import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Route Not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: 'jobs/:id',
          element: <PrivateRoute><JobDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoute><JobApply/></PrivateRoute>
        },
        {
          path: 'myApplications',
          element: <PrivateRoute><MyApplication/></PrivateRoute>
        },
        {
          path: 'addJob',
          element: <PrivateRoute><AddJob/></PrivateRoute>
        },
        {
          path: 'myPostedJobs',
          element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
        },
        {
          path: 'viewApplications/:job_id',
          element: <PrivateRoute><ViewApplications/></PrivateRoute>,
          // 88888888888 backend er data ta ekhane load korci
          loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        }, 
        {
            path: 'register',
            element: <Register/>,
        },
        {
          path: 'signin',
          element: <SignIn/>,
        }
      ]
    },
  ]);

  export default router;