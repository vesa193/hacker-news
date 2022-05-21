import { Navigate, Route, Routes } from 'react-router-dom';
import Stories from '../screens/Stories/Stories';

function RouterManager() {
    return (
        <Routes>
            <Route path="stories" element={<Stories />} />
            <Route path="*" element={<Navigate to="stories" />} />
        </Routes>
    );
}

export default RouterManager;
