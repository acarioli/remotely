import './App.css';
import Main from './components/Main';
import DivUsers from './components/DivUsers';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import NavbarComponent from './components/NavbarComponent';
import SignUp from './components/SignUp';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import LoggedUsers from './components/LoggedUsers';
import Messages from './components/Messages';
import { Routes, Route } from "react-router-dom";
import 'rsuite/styles/index.less';
import Subscriptions from './components/Subscriptions';

function App() {
  return (
    <div>
            <header>
            <NavbarComponent />
            </header>
              <body>
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/usertype" element={<DivUsers />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/form" element={<JobForm />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users" element={<LoggedUsers />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/subscriptors" element={<Subscriptions />} />
                </Routes>
              </body>
          <footer>
          <Footer />
          </footer>
      </div>
);
}

export default App;
