

import Home from './Home';
import HomeProvider from '../providers/HomeContext';

function App() {
  return (
    <div>
    <HomeProvider>
      <Home></Home>
    </HomeProvider>  
    </div>
    
    
  );
}

export default App;
