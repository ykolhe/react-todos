import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';


function App() {

  const todos = [
    {rownumber: 1, rowDiscription: 'Feed Puppy',rowAssigned: 'Paki'},
    {rownumber: 2, rowDiscription: 'Water plants',rowAssigned: 'Scl'},
    {rownumber: 3, rowDiscription: 'Make Dinner',rowAssigned: 'Bng'}
  ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Scope</th></tr>              
            </thead>
            <tbody>
                <TodoRowItem rownumber={todos[0].rownumber} 
                  rowDiscription={todos[0].rowDiscription} 
                  rowAssigned={todos[0].rowAssigned}
                />
                <TodoRowItem rownumber={todos[1].rownumber} 
                  rowDiscription={todos[1].rowDiscription} 
                  rowAssigned={todos[1].rowAssigned}
                />
                <TodoRowItem rownumber={todos[2].rownumber} 
                  rowDiscription={todos[2].rowDiscription} 
                  rowAssigned={todos[2].rowAssigned}
                />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
