import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageProvider } from "./context/PageContext";
import Layout from "./components/layout/Layout";
import Profile from "./pages/profile/Profile";
import Velog from "./pages/velog/Velog";
import GitHub from "./pages/github/GitHub";

function App() {

    return (
        <HashRouter>
            <PageProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route
                            index
                            element={<Navigate to="/profile" replace />}
                        />
                        <Route path="profile" element={<Profile />} />
                        <Route path="github" element={<GitHub />} />
                        <Route path="velog" element={<Velog />} />
                        <Route path="velog/:postId" element={<Velog />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </PageProvider>
        </HashRouter>
    );
}

export default App;
