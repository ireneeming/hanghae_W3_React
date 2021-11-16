import {Route, Link} from 'react-router-dom';
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog으로 가기</Link>
      </div>
      <Route path ="/" exact>
        <Home />
      </Route>
      
      <Route path ="/cat" component ={Cat}> {/* :동적 라우팅. 어떤 변수명으로받아올건지 파라미터 명 적기 */}
        {/* <Cat></Cat> */}
      </Route>
      <Route path ="/dog">
       <Dog/>
      </Route>

    </div>
  );
}

export default App;
