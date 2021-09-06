import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import TaskList from './components/Tasks/TaskList';
import AddTask from './components/Tasks/AddTask';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <MyCalendar />
      <TaskList />
      <Footer />
    </>
  );
}

export default App;