import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import SomethingWentWrong from './pages/SomethingWentWrong';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import NoteForm from './pages/Notes/forms/NoteForm';
import MyNotes from './pages/Notes';

import { ModalProvider } from './context/ModalContext';
import { ProfileDropdownProvider } from './context/ProfileDropdown';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';

function App() {
  return (
    <Router>
      <ToastContainer />
      <ErrorBoundary fallback={<SomethingWentWrong />}>
        <ModalProvider>
          <ProfileDropdownProvider>
            <Routes>
              <Route path='*' element={<PageNotFound />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route
                path='/forgot-password'
                element={<ForgotPassword />}
              ></Route>
              <Route path='/add-note' element={<NoteForm mode='add' />}></Route>
              <Route
                path='/edit-note'
                element={<NoteForm mode='edit' />}
              ></Route>
              <Route path='/notes/*' element={<MyNotes />}></Route>
            </Routes>
          </ProfileDropdownProvider>
        </ModalProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
