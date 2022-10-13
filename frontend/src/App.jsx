import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUserPage from "./pages/Add.page";
import EditPage from "./pages/Edit.page";
import HomePage from "./pages/HomeView.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/add" element={<AddUserPage />} />
        <Route path="/employee/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
