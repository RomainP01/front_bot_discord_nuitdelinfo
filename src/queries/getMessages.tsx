import { collection, getDocs } from 'firebase/firestore/lite';

export const getMessages = async (db: any) => {
    const themCol = collection(db, "messages");
    const themeSnapshot = await getDocs(themCol);
    const themeList = themeSnapshot.docs.map((doc) => doc.data());
    return themeList;
};