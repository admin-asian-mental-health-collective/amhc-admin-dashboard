import ReactDOM from 'react-dom';
import reportWebVitals from '@/reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';

ReactDOM.render(
    <Layout>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    </Layout>,
    document.getElementById('root')
);

reportWebVitals();
