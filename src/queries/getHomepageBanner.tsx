import { collection, getDocs } from 'firebase/firestore/lite';

export const getHomepageBanner = async (db: any) => {
    const themCol = collection(db, "homepageBanner");
    const themeSnapshot = await getDocs(themCol);
    const themeList = themeSnapshot.docs.map((doc) => doc.data());
    return themeList[0].value;
};