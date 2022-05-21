import { Navigate, Route, Routes } from 'react-router-dom';
import Stories from './screens/Stories/Stories';

function App() {
    return (
        <Routes>
            <Route path="stories" element={<Stories />} />
            <Route path="*" element={<Navigate to="stories" />} />
        </Routes>
    );
}

export default App;
