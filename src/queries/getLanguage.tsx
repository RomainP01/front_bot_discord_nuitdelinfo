import { collection, getDocs } from 'firebase/firestore/lite';

export const getLanguage = async (db: any) => {
    const themCol = collection(db, "language");
    const themeSnapshot = await getDocs(themCol);
    const themeList = themeSnapshot.docs.map((doc) => doc.data());
    return themeList[0].value;
};