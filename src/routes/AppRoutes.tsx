import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../app/pages/main/Main';
import NotFound from '../app/pages/not-found/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
