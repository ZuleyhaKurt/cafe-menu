import Header from './components/Header';
import Navbar from './components/Navbar';

import Data from './helper/Data';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {
        Data.map((item)=><Card item={item}/>)
      }
    </div>
  );
}

export default App;

