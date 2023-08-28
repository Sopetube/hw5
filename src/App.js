import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import { Route, Routes, BrowserRouter, createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "signin",
//         element: <SignIn />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//     ]
//   },
// ]);


function App() {

  return (
    <>
     {/* <BrowserRouter>
     <div className="login">
       <Routes>
         <Route path='/signin' element={<SignIn/>} />
         <Route path='/signup' element={<SignUp/>} />
       </Routes>
     </div>
    </BrowserRouter> */}
    <RouterProvider router={router} />
    </>
  );
}

export default App;
