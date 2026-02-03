import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>Your Todo's</div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Scope</th></tr>              
            </thead>
            <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Feed Dog</td>
                  <td>Steve</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Get India Win</td>
                  <td>Travis</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
