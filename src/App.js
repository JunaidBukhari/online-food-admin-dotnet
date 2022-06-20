import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/privateRoute';
import Footer from './HOC/footer';
import Header from './HOC/header';
import Menu from './pages/menu';
import Auth from './pages/auth';
import Orders from './pages/orders';
import NotFound from './pages/notFound';
import AuthRoute from './components/authRoute';
import Users from './pages/users';
function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />

      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<AuthRoute component={Auth} />}></Route>
          <Route path="/" element={<PrivateRoute component={Orders} />}></Route>
          <Route
            path="/menu"
            element={<PrivateRoute component={Menu} />}
          ></Route>

          <Route
            path="/users"
            element={<PrivateRoute component={Users} />}
          ></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
