import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import TaskList from './components/Tasks/TaskList';
import Footer from './components/Footer';

function App() {

    // const [isAdded, setIsAdded] = useState(false);

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

//vill uppdatera isAdded från AddTask > MyCalendar > App => TaskList omrenderas o ny task syns i listan