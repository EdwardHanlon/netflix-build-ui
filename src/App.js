import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebaseApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./App.css";


function App() {
    const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {		
			console.log("Auth State Changed!")	
			if(userAuth) {
				// Logged in				
				dispatch(login({
						uid: userAuth.uid,
						email: userAuth.email
					})
				);
			}
			else {
				// Logged out
				dispatch(logout())
			}
		})

		return unsubscribe;
	}, [dispatch])

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
						<Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;
