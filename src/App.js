
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes';

function App() {

  return (
      <div className="bg-gray-300">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
