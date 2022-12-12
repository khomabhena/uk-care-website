import { doc, getDoc, updateDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db } from "../Firebase"

export const ProfileControls = () => {

    const getData = async () => {
        const docRef = doc(db, "applicants", localStorage.getItem('userEmail'));
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return { }
        }
    }

    const Nav = () => {

        const setNavName = async () => {
            const data = await getData()
            document.querySelector('.nav-name').textContent = "Hi, " + data.firstName
        }

        return { setNavName }
    }

    const Info = () => {

        const setInfoDetails = async () => {
            const data = await getData()

            document.querySelector('.info-name').textContent = data.firstName + " " + data.lastName
            document.querySelector('.info-profession').textContent = data.profession
            document.querySelector('.info-cv').textContent = "my resume"
            document.querySelector('.info-email').textContent = data.email
            document.querySelector('.info-phone').textContent = data.phone
            document.querySelector('.info-country').textContent = data.country    
        }

        return { setInfoDetails }
    }

    const Overview = () => {

        const setIntro = async () => {
            const data = await getData()

            document.querySelector('.overview-intro').textContent = data.intro
            document.querySelector('.overview-languages').textContent = data.languages
        }

        return { setIntro }
    }

    const Update = () => {

        const setInitialValues = async () => {
            const data = await getData()

            document.querySelector('.firstName').value = data.firstName
            document.querySelector('.lastName').value = data.lastName
            document.querySelector('.profession').value = data.profession
            document.querySelector('.country').value = data.country
            document.querySelector('.intro').value = data.intro
            document.querySelector('.languages').value = data.languages
            document.querySelector('.address').value = data.address
            document.querySelector('.facebook').value = data.facebook
            document.querySelector('.twitter').value = data.twitter
            document.querySelector('.phone').value = data.phone
            document.querySelector('.whatsApp').value = data.whatsApp
        }

        const getFormData = () => {
            const firstName = document.querySelector('.firstName').value
            const lastName = document.querySelector('.lastName').value
            const profession = document.querySelector('.profession').value
            const country = document.querySelector('.country').value
            const intro = document.querySelector('.intro').value
            const languages = document.querySelector('.languages').value
            const address = document.querySelector('.address').value
            // const cvUrl = document.querySelector('.cv').files[0]
            const facebook = document.querySelector('.facebook').value
            const twitter = document.querySelector('.twitter').value
            const phone = document.querySelector('.phone').value
            const whatsApp = document.querySelector('.whatsApp').value
    
            return {
                firstName,
                lastName,
                profession,
                country,
                intro,
                languages,
                address,
                facebook,
                twitter,
                phone,
                whatsApp
    
            }
        }

        const getFiles = () => {
            const cv = document.querySelector('.cv').files[0]
            const id = document.querySelector('.id').files[0]
        
            return {
                cv, id
            }
        }

        const uploadFiles = async () => {
            const {cvFile, idFile} = getFiles()
            let cvUrl = ''
            let idUrl = ''
    
            const storage = getStorage()
            
            const storageRefCV = ref(storage, `${localStorage.getItem('userEmail')}/cv${localStorage.getItem('userEmail')}`)
            const storageRefId = ref(storage, `${localStorage.getItem('userEmail')}/id${localStorage.getItem('userEmail')}`)
            
            const uploadTaskCV = await uploadBytesResumable(storageRefCV, cvFile)
            const uploadTaskID = await uploadBytesResumable(storageRefId, idFile)
    
            uploadTaskCV.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    
                    console.log(`CV Percent: ${percent}`)
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTaskCV.snapshot.ref).then((url) => {
                        cvUrl = url
                        console.log(url)
                        uploadToFireStore({cvUrl, idUrl})
                    })
                }
            )
            uploadTaskID.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    
                    console.log(`CV Percent: ${percent}`)
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTaskID.snapshot.ref).then((url) => {
                        idUrl = url
                        console.log(url)
                        uploadToFireStore({cvUrl, idUrl})
                    })
                }
            )
    
            return { cvUrl, idUrl }
        }

        const uploadToFireStore = async ({cvUrl, idUrl}) => {
            const washingtonRef = await doc(db, 'applicants', localStorage.getItem('userEmail'));
            await updateDoc(washingtonRef, {
            ...getFormData(), cvUrl, idUrl
        });
    
        }

        return { setInitialValues, uploadFiles }
    }

    return { getData, Nav, Info, Overview, Update }

}

// export default ProfileControls



