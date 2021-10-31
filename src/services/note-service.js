import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

class NoteService {
    findAll() {
        const notesRef = collection(db, 'Notes');
        return getDocs(notesRef);
    }

    addNote(note) {
        return addDoc(collection(db, 'Notes'), note);
    }
}

const noteService = new NoteService();

export default noteService;
