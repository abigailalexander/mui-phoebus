import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import DCMScreen from './routes/dcmScreen'
import CameraScreen from './routes/cameraScreen';
import LowLevelScreen from './routes/lowLevelScreen';
import DCMDiagramScreen from './routes/dcmDiagramScreen';
import MotorStaticScreen from './routes/motorStaticScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    [<Route path="/dcm" element={<DCMScreen />} />,
    <Route path="/lowlevel" element={<LowLevelScreen />} />,
    <Route path="/camera" element={<CameraScreen />} />,
    <Route path="/dcmdiagram" element={<DCMDiagramScreen />} />,
    <Route path="/motorstatic" element={<MotorStaticScreen />} />,
    ]
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
