import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase"

const Applicant = () => {
    let userData = {}

    const getUserEmail = () => {
        return localStorage.getItem('userEmail')
    }

    const getUserData = async () => {
        const email = getUserEmail()

        const docRef = doc(db, "applicants", email)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            userData = docSnap.data()
            console.log(userData)
        } else 
            console.log('No such document!');
    }

    return { getUserData }
}

Applicant().getUserData()


