import Header from './components/Header/Header';
import Main from './components/Main';
import MyCalendar from './components/Calendar/MyCalendar';
import Footer from './components/Footer';
import TaskList from './components/Tasks/TaskList';



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