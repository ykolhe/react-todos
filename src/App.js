import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoTables from './components/TodoTables';


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
          <TodoTables todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
