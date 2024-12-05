import './App.css';
import useFetch from './hooks/useFetch';
import { baseUrl } from './assets/url';

import { RouterProvider } from 'react-router-dom'
import router from './router/router'

function App() {
  const [job, err, loading] = useFetch(`${baseUrl}/job`)


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
