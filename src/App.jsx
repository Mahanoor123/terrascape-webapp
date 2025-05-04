// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./App.css";
import CardSection from "./components/CardSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import DetailSection from './components/DetailSection';

function App() {
 /*  const router = createBrowserRouter (
    [
      {path:"/", element: <App/>},
      {path:"/country/:id", element:<DetailSection/>, 
        loader: async ({ params }) => {
          const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
          const data = await res.json();
          return data[0];
        }
      }
    ]
  ); */


  return (
    <>
    <Header/>
    <Hero />
    <CardSection/>
    {/* <DetailSection/> */}
    {/* <RouterProvider router={router}/> */}
    </>
  );
}

export default App;

