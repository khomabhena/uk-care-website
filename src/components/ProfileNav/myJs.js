import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const ProfileNavigation = () => {
    const getData = async () => {
        const docRef = doc(db, "applicants", localStorage.getItem('userEmail'));
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            setData(docSnap.data())
        } else {
            return { }
        }
    }

    const setData = (data) => {
        document.querySelector('.nav-name').value = "Hi, " + data.firstName 
    }

    return { getData }
}

export default ProfileNavigation