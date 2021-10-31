import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

class AuthService {
    login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    logout() {
        return signOut(auth);
    }
}

const authService = new AuthService();

export default authService;
