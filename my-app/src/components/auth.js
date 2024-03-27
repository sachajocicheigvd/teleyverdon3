import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(!!auth.currentUser); // Vérifie si l'utilisateur est connecté

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setLoggedIn(true); // Met à jour l'état pour indiquer que l'utilisateur est connecté
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setLoggedIn(true); // Met à jour l'état pour indiquer que l'utilisateur est connecté
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setLoggedIn(false); // Met à jour l'état pour indiquer que l'utilisateur n'est plus connecté
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Auth">
            {!loggedIn && ( // Affiche les champs de connexion uniquement si l'utilisateur n'est pas connecté
                <>
                    <input
                        placeholder="Email..."
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <input
                        placeholder="Password..."
                        type='password'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button onClick={signIn}>Sign in</button>

                    <button onClick={signInWithGoogle}>Sign in with google</button>
                </>
            )}
            {loggedIn && <p>Vous êtes connecté</p>} {/* Affiche le message si l'utilisateur est connecté */}
            {loggedIn && <button onClick={logout}>Logout</button>} {/* Affiche le bouton Logout si l'utilisateur est connecté */}
        </div>
    );
};
