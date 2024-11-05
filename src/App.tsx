import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import DCMScreen from './routes/dcmScreen'
import CameraScreen from './routes/cameraScreen';
import LowLevelScreen from './routes/lowLevelScreen';
import DCMDiagramScreen from './routes/dcmDiagramScreen';
import MotorStaticScreen from './routes/motorStaticScreen';
import MuiDCMDiagramScreen from './routes/muiDcmDiagramScreen';
import MuiLowLevelScreen from './routes/muiLowLevelScreen';
import MuiDCMScreen from './routes/muiDcmScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    [<Route path="/dcm" element={<DCMScreen />} />,
    <Route path="/lowlevel" element={<LowLevelScreen />} />,
    <Route path="/camera" element={<CameraScreen />} />,
    <Route path="/dcmdiagram" element={<DCMDiagramScreen />} />,
    <Route path="/motorstatic" element={<MotorStaticScreen />} />,
    <Route path="/mui-lowlevel" element={<MuiLowLevelScreen />} />,
    <Route path="/mui-dcmdiagram" element={<MuiDCMDiagramScreen />} />,
    <Route path="/mui-dcm" element={<MuiDCMScreen />} />,
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
