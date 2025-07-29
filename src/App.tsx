import { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageProvider } from "./context/PageContext";
import Layout from "./components/layout/Layout";
import Profile from "./pages/profile/Profile";
import Calender from "./pages/calender/Calender";
import Study from "./pages/study/Study";
import Game from "./pages/game/Game";
import Setting from "./pages/setting/Setting";

function App() {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };
        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (
                e.ctrlKey &&
                (e.key === "+" || e.key === "-" || e.key === "=")
            ) {
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", handleKeydown);

        return () => window.removeEventListener("keydown", handleKeydown);
    }, []);

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
                        <Route path="calendar" element={<Calender />} />
                        <Route path="study" element={<Study />} />
                        <Route path="game" element={<Game />} />
                        <Route path="setting" element={<Setting />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </PageProvider>
        </HashRouter>
    );
}

export default App;
