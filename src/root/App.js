

import Home from './Home';
import {HomeProvider} from '../providers/HomeContext';

function App() {
  return (
    <HomeProvider>
      <Home></Home>
    </HomeProvider>
    
  );
}

export default App;
