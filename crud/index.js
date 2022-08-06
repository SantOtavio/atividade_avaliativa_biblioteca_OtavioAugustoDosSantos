const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');


const firebaseConfig = {
    apiKey: "AIzaSyDuj64d_ol5uvqVvEwVNDPN9ihpBVedaaA",
    authDomain: "fir-santeca.firebaseapp.com",
    projectId: "fir-santeca",
    storageBucket: "fir-santeca.appspot.com",
    messagingSenderId: "440703953976",
    appId: "1:440703953976:web:5c907e26635cbbfc2e0acd",
    measurementId: "G-9RWVQE8QXJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, tableName, id), data);
        const savedData = {
            ...data,
            id: id,
        };
    } else {
        console.log("aqui", nomeTabela, dado);
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const data = await getDocs(collection(db, nomeTabela));
    return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found!");
    }

}

async function remove(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deleted`
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}