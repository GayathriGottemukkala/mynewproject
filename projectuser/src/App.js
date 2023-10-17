import logo from './logo.svg';
import './App.css';
import Signup from "./componet/signup/signup.js"
import Loginpage from "./componet/loginpage/login.js"
import { createBrowserRouter, RouterProvider, Router} from 'react-router-dom';

const router=createBrowserRouter(
  [{path:"/", element:<Signup/>},
{path:"/login", element:<Loginpage/>}]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
