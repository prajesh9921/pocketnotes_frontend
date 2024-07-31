import HomePage from "./screens/Home/home";
import { Route, Routes } from "react-router-dom";
import SharedNotes from "./screens/SharedScreen/sharedScreen";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/notes/:groupid" element={<SharedNotes />} />
    </Routes>
  );
}

export default App;
