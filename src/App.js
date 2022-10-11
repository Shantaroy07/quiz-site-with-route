import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Component/Topics/Topics';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import Quizzes from './Component/Quizzes/Quizzes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/quiz/:quizId',
          element: <Quizzes></Quizzes>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

          }
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    { path: '*', element: <div>This route is not found.</div> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
