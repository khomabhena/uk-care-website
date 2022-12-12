import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const ProfileInformation = () => {

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
        document.querySelector('.name').textContent = data.firstName + " " + data.lastName
        document.querySelector('.profession').textContent = data.profession
        document.querySelector('.cv').textContent = "my resume"
        document.querySelector('.email').textContent = data.email
        document.querySelector('.phone').textContent = data.phone
        document.querySelector('.country').textContent = data.country
    }


    return { getData }

}

export default ProfileInformation