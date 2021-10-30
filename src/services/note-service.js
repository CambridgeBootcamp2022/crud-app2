import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

class NoteService {
    async findAll() {
        return await getDocs(collection(db, 'Notes'));
    }
}

const noteService = new NoteService();

export default noteService;
