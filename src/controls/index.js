import { addDoc, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { db } from "../Firebase"

const APPLICANTS = 'applicants'
const EMPLOYERS = 'employers'
const JOBS = 'jobs'
const EMAIL = localStorage.getItem('userEmail')

export const FirebaseStorage = () => {

    const setData = async (path, id, data) => {
        await setDoc(doc(db, path, id), data)
    }

    const addData = async (path, data) => {
        await addDoc(collection(db, path), data)

    }

    const updateData = async (path, id, data) => {
        const ref = doc(db, path, id)
        await updateDoc(ref, data)
    }

    const getData = async (path, id) => {
        const ref = doc(db, path, id)
        const snapshot = await getDoc(ref)

        if (snapshot.exists)
            return snapshot.data()
        else 
            return {}
    }

    const getAllData = async (path) => {
        const snapshot = await getDocs(collection(db, path))
        const array = []
        snapshot.forEach(doc => {
            // console.log(doc.id, " => ", doc.data())
            array.push({id: doc.id, data: doc.data()})
        })

        return array
    }

    const uploadFile = async (folderPath, file, path, id, data, dUrl, name) => {
        const storage = getStorage()
        const storageRef = ref(storage, folderPath + "/" + file.name)

        await uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(storageRef).then((url) => {
                updateData(path, id, {...data, [dUrl]: url, [name]: file.name})
                return url
            })
        })
    }

    const deleteFile = async (folderPath, fileName) => {
        const storage = getStorage()
        const storageRef = ref(storage, folderPath + "/" + fileName)

        deleteObject(storageRef).then(() => {
            return true
        }).catch((error) => {
            return false
        })
    }

    return { setData, getData, getAllData, updateData, addData, uploadFile, deleteFile }
}

export const ApplicantControls = () => {

    const getData = async () => {
        const docRef = doc(db, "applicants", localStorage.getItem('userEmail'));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return {};
        }
    };

    const Nav = () => {

        const setNavName = async () => {
            const data = await getData();
            document.querySelector('.nav-name').textContent = "Hi, " + data.firstName;
            document.querySelector('.nav-image').src = data.profileUrl
        };

        return { setNavName };
    };

    const Info = () => {

        const setInfoDetails = async () => {
            const data = await getData();

            document.querySelector('.info-name').textContent = data.firstName + " " + data.lastName
            document.querySelector('.info-profession').textContent = data.profession
            document.querySelector('.info-cv').textContent = data.cv
            document.querySelector('.info-email').textContent = data.email
            document.querySelector('.info-phone').textContent = data.phone
            document.querySelector('.info-country').textContent = data.country
            document.querySelector('.info-profile').src = data.profileUrl
            document.querySelector('.info-download-resume').href = data.cvUrl
        };

        return { setInfoDetails };
    };

    const Overview = () => {

        const setIntro = async () => {
            const data = await getData();

            document.querySelector('.overview-intro').textContent = data.intro;
            // document.querySelector('.overview-languages').textContent = data.languages;
        };

        return { setIntro };
    };

    const Update = () => {

        const setInitialValues = async () => {
            const data = await getData();

            document.querySelector('.firstName').value = data.firstName || ''
            document.querySelector('.lastName').value = data.lastName || ''
            document.querySelector('.profession').value = data.profession || ''
            document.querySelector('.country').value = data.country || ''
            document.querySelector('.intro').value = data.intro || ''
            document.querySelector('.languages').value = data.languages || ''
            document.querySelector('.address').value = data.address || ''
            document.querySelector('.facebook').value = data.facebook || ''
            document.querySelector('.twitter').value = data.twitter || ''
            document.querySelector('.phone').value = data.phone || ''
            document.querySelector('.whatsApp').value = data.whatsApp || ''
            document.querySelector('.cv').name = data.cv || ''
            document.querySelector('.id').name = data.id || ''
            document.querySelector('.update-profile').name = data.profile || ''
        };

        const getFormData = () => {
            const firstName = document.querySelector('.firstName').value;
            const lastName = document.querySelector('.lastName').value;
            const profession = document.querySelector('.profession').value;
            const country = document.querySelector('.country').value;
            const intro = document.querySelector('.intro').value;
            const languages = document.querySelector('.languages').value.split(',');
            const address = document.querySelector('.address').value;
            const facebook = document.querySelector('.facebook').value;
            const twitter = document.querySelector('.twitter').value;
            const phone = document.querySelector('.phone').value;
            const whatsApp = document.querySelector('.whatsApp').value;

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
            };
        };

        const getFiles = () => {
            const fileCV = document.querySelector('.cv').files[0];
            const fileID = document.querySelector('.id').files[0];
            const fileProfilePicture = document.querySelector('.update-profile').files[0];

            return {
                fileCV, fileID, fileProfilePicture
            };
        };

        const uploadData = async () => {
            const { fileCV, fileID, fileProfilePicture  } = getFiles();
            const data = await getFormData()

            if (fileCV !== undefined) FirebaseStorage().uploadFile(EMAIL, fileCV, APPLICANTS, EMAIL, data, 'cvUrl', 'cv')
            if (fileID !== undefined) FirebaseStorage().uploadFile(EMAIL, fileID, APPLICANTS, EMAIL, data, 'idUrl', 'id')
            if (fileProfilePicture !== undefined) FirebaseStorage().uploadFile(EMAIL, fileProfilePicture, APPLICANTS, EMAIL, data, 'profileUrl', 'profile')
            
            FirebaseStorage().updateData(APPLICANTS, EMAIL, data)
        };


        return { setInitialValues, uploadData };
    };

    const Qualifications = () => {

        const getFormData = () => {
            const degree = document.querySelector('.q-degree').value
            const institution = document.querySelector('.q-institution').value
            const yearStart = document.querySelector('.q-yearStart').value
            const yearEnd = document.querySelector('.q-yearEnd').value
            const intro = document.querySelector('.q-intro').value
        
            return {
                degree, institution, yearStart, yearEnd, intro
            }
        }

        const uploadData = async () => {
            const data = await FirebaseStorage().getData(APPLICANTS, EMAIL)
            const formData = getFormData()

            let qualifications = await data.qualifications
            if (qualifications === undefined) {
                qualifications = []
            }
            qualifications.push(formData)
            FirebaseStorage().updateData(APPLICANTS, EMAIL, {qualifications})
        }

        return { uploadData }
    }

    const Experience = () => {

        const getFormData = () => {
            const title = document.querySelector('.ex-title').value
            const company = document.querySelector('.ex-company').value
            const yearStart = document.querySelector('.ex-yearStart').value
            const yearEnd = document.querySelector('.ex-yearEnd').value
            const intro = document.querySelector('.ex-intro').value
        
            return {
                title, company, yearStart, yearEnd, intro
            }
        }

        const uploadData = async () => {
            const data = await FirebaseStorage().getData(APPLICANTS, EMAIL)
            const formData = getFormData()

            let experience = await data.experience
            if (experience === undefined) {
                experience = []
            }
            experience.push(formData)
            FirebaseStorage().updateData(APPLICANTS, EMAIL, {experience})
        }

        return { uploadData }
    }

    return { getData, Nav, Info, Overview, Update, Qualifications, Experience };

}

export const EmployerControls = () => {

    const getData = async () => {
        const docRef = doc(db, EMPLOYERS, EMAIL);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return {};
        }
    }

    const Nav = () => {

        const setNavName = async () => {
            const data = await getData()
            document.querySelector('.nav-company').textContent = data.companyName
        }

        return { setNavName }
    }

    const Update = () => {

        const setInitialValues = async () => {
            const data = await getData()

            document.querySelector('.companyName').value = data.companyName || ''
            document.querySelector('.name').value = data.name || ''
            document.querySelector('.update-country').value = data.country || ''
            document.querySelector('.employees').value = data.employees || ''
            document.querySelector('.intro').value = data.intro || ''
            document.querySelector('.registrationNumber').value = data.registrationNumber || ''
            document.querySelector('.twitter').value = data.twitter || ''
            document.querySelector('.phone').value = data.phone || ''
            document.querySelector('.linkedin').value = data.linkedin || ''
            document.querySelector('.website').value = data.website || ''
        
            return data
        }

        const getFormData = () => {
            const companyName = document.querySelector('.companyName').value
            const name = document.querySelector('.name').value
            const country = document.querySelector('.update-country').value
            const employees = document.querySelector('.employees').value
            const intro = document.querySelector('.intro').value
            const registrationNumber = document.querySelector('.registrationNumber').value
            const twitter = document.querySelector('.twitter').value
            const phone = document.querySelector('.phone').value
            const linkedin = document.querySelector('.linkedin').value
            const website = document.querySelector('.website').value
        
            return {
                companyName,
                name,
                country,
                employees,
                intro,
                registrationNumber,
                twitter,
                phone,
                linkedin,
                website
            }
        }

        const getFiles = () => {
            const idFile = document.querySelector('.id').files[0];

            return {
                idFile
            };
        }

        const uploadFiles = async () => {
            const { idFile } = getFiles()
            let idUrl = ''

            const storage = getStorage()

            const storageRefId = ref(storage, `${localStorage.getItem('userEmail')}/employer/${idFile.name}`);

            const uploadTaskID = await uploadBytesResumable(storageRefId, idFile);

            uploadTaskID.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    console.log(`CV Percent: ${percent}`);
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTaskID.snapshot.ref).then((url) => {
                        idUrl = url;
                        console.log(url);
                    });
                }
            );
        }

        const uploadToFireStore = async () => {
            const washingtonRef = await doc(db, 'employers', localStorage.getItem('userEmail'));
            await updateDoc(washingtonRef, {
                ...getFormData()
            });

        };

        return { setInitialValues, uploadFiles, uploadToFireStore }
    }

    const Info = () => {

        const setInfoDetails = async () => {
            const data = await getData();

            document.querySelector('.info-company').textContent = data.companyName
            // document.querySelector('.info-established-top').textContent = "Since " + data.established || ''
            document.querySelector('.info-name').textContent = data.name
            document.querySelector('.info-employees').textContent = data.employees
            document.querySelector('.info-country').textContent = data.country
            document.querySelector('.info-website').textContent = data.website
            // document.querySelector('.info-established').textContent = "Since " + data.established || ''
            document.querySelector('.overview-about').textContent = data.intro
        };

        return { setInfoDetails };
    }

    const Job = () => {

        const getFormData = () => {
            const title = document.querySelector('.title').value
            const salary = document.querySelector('.salary').value
            const country = document.querySelector('.country').value
            const profession = document.querySelector('.job-profession').value
            const description = document.querySelector('.description').value

            return {
                title,
                salary,
                country,
                profession,
                description,
                date: new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()
            }
        }

        const uploadJob = async () => {
            const data = await FirebaseStorage().getData(JOBS, EMAIL)
            const formData = getFormData()

            let jobs = data
            if (jobs === undefined) {
                jobs = []
                jobs.push(formData)
                FirebaseStorage().setData(JOBS, EMAIL, {jobs: jobs})
            } else {
                const job = data.jobs
                job.push(formData)
                FirebaseStorage().updateData(JOBS, EMAIL, {jobs: job})
            }
            
        }
        
        return { uploadJob }
    }

    return { Nav, Update, Info, Job }
} 




