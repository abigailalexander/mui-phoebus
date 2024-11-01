import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import DCMCameraScreen from './routes/dcmCamera'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DCMCameraScreen />} />
  )
);

function App({ }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
