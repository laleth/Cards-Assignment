import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricecards from './components/Cards';
import {pricetag} from './data/data'
function App() {
  return (
    <div className="App">
      <Pricecards data={pricetag}/>
    </div>
  );
}

export default App;
