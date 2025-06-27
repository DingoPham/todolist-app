import ListForm from './components/display_part/ListForm';
import Title from './components/display_part/Title';
import TodoTable from './components/display_part/TodoTable';


const App = () => {
  return (
    <div className="App">
      <TodoTable>
        <Title />
        <ListForm />
      </TodoTable>
    </div>
  );
}


export default App;
