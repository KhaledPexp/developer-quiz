
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Error from './Error/Error';
import Quizstat from './components/QuizStatistics/Quizstat';
import Quizes from './components/Quizes/Quizes';
import About from './components/About/About';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Root></Root>,
      children: [
          {
            path: '/home',
            element: <Home></Home>

          },
          {
            path: '/',
            element: <Home></Home>

          },
          {
            path: '/quizzes/:quizId',
            loader:  ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
            element: <Quizes></Quizes>,
            
            
          },
          {
            path: '/quizStatistics',
            element: <Quizstat></Quizstat>,
          },
          {
            path: '/about',
            element: <About></About>,
          }
      ],
    },
    {
      path: '*',
      element: <Error></Error>
    }
    
  ])
  return (
    <div className="App">
       <RouterProvider router = {router}> </RouterProvider>
    </div>
  );
}

export default App;
