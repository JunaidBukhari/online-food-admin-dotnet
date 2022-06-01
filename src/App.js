import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/privateRoute';
import Footer from './HOC/footer';
import Header from './HOC/header';
import Start from './pages/start';
import Menu from './pages/menu';
import Services from './pages/services';
import Auth from './pages/auth';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import AuthRoute from './components/authRoute';
function App() {
  return (
    <div className='App'>
      <Toaster position='bottom-center' reverseOrder={false} />

      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<AuthRoute component={Auth} />}></Route>
          <Route path='/' element={<PrivateRoute component={Start} />}></Route>
          <Route
            path='/menu'
            element={<PrivateRoute component={Menu} />}
          ></Route>
          <Route
            path='/cart'
            element={<PrivateRoute component={Cart} />}
          ></Route>
          <Route
            path='/services'
            element={<PrivateRoute component={Services} />}
          ></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
