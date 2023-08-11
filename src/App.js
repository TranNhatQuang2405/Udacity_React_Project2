import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageTemplate } from 'Layout';
import { routes } from 'Utils/routeUtil';
import { AuthProvider } from 'Provider';


function App() {
    return (
        <AuthProvider>
            <div className="App">
                <PageTemplate>
                    <Routes>
                        {
                            routes.map((route) => (
                                <Route key={route.id} path={route.path} element={route.element} />
                            ))
                        }
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </PageTemplate>
            </div>
        </AuthProvider>
    );
}

export default App;
