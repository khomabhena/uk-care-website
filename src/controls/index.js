import { addDoc, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { db } from "../Firebase"

export const FirebaseStorage = () => {

    const setData = async (path, id, data) => {
        await setDoc(doc(db, path, id), data)
        .then(() => true)
        .catch(() => false)
    }

    const addData = async (path, data) => {
        const res = await addDoc(collection(db, path), data)

    }

    const updateData = async (path, id, data) => {
        const ref = doc(db, path, id)
        const res = await updateDoc(ref, data)
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
        
        return snapshot
    }

    const uploadFile = async (folderPath, file) => {
        const storage = getStorage()
        const storageRef = ref(storage, folderPath + "/" + file.name)
        
        uploadBytes(storageRef, file).then((snapshot) => {
            return true
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

export function ApplicantControls() {

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
        };

        return { setNavName };
    };

    const Info = () => {

        const setInfoDetails = async () => {
            const data = await getData();

            document.querySelector('.info-name').textContent = data.firstName + " " + data.lastName;
            document.querySelector('.info-profession').textContent = data.profession;
            document.querySelector('.info-cv').textContent = "my resume";
            document.querySelector('.info-email').textContent = data.email;
            document.querySelector('.info-phone').textContent = data.phone;
            document.querySelector('.info-country').textContent = data.country;
        };

        return { setInfoDetails };
    };

    const Overview = () => {

        const setIntro = async () => {
            const data = await getData();

            document.querySelector('.overview-intro').textContent = data.intro;
            document.querySelector('.overview-languages').textContent = data.languages;
        };

        return { setIntro };
    };

    const Update = () => {

        const setInitialValues = async () => {
            const data = await getData();

            document.querySelector('.firstName').value = data.firstName;
            document.querySelector('.lastName').value = data.lastName;
            document.querySelector('.profession').value = data.profession;
            document.querySelector('.country').value = data.country;
            document.querySelector('.intro').value = data.intro;
            document.querySelector('.languages').value = data.languages;
            document.querySelector('.address').value = data.address;
            document.querySelector('.facebook').value = data.facebook;
            document.querySelector('.twitter').value = data.twitter;
            document.querySelector('.phone').value = data.phone;
            document.querySelector('.whatsApp').value = data.whatsApp;
        };

        const getFormData = () => {
            const firstName = document.querySelector('.firstName').value;
            const lastName = document.querySelector('.lastName').value;
            const profession = document.querySelector('.profession').value;
            const country = document.querySelector('.country').value;
            const intro = document.querySelector('.intro').value;
            const languages = document.querySelector('.languages').value;
            const address = document.querySelector('.address').value;
            // const cvUrl = document.querySelector('.cv').files[0]
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
            const cvFile = document.querySelector('.cv').files[0];
            const idFile = document.querySelector('.id').files[0];

            return {
                cvFile, idFile
            };
        };

        const uploadFiles = async () => {
            const { cvFile, idFile } = getFiles();
            let cvUrl = '';
            let idUrl = '';

            const storage = getStorage();

            const storageRefCV = ref(storage, `${localStorage.getItem('userEmail')}/${cvFile.name}`);
            const storageRefId = ref(storage, `${localStorage.getItem('userEmail')}/${idFile.name}`);

            const uploadTaskCV = await uploadBytesResumable(storageRefCV, cvFile);
            const uploadTaskID = await uploadBytesResumable(storageRefId, idFile);

            uploadTaskCV.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    console.log(`CV Percent: ${percent}`);
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTaskCV.snapshot.ref).then((url) => {
                        cvUrl = url;
                        console.log(url);
                        uploadToFireStore({ cvUrl, idUrl });
                    });
                }
            );

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
                        uploadToFireStore({ cvUrl, idUrl });
                    });
                }
            );

            return { cvUrl, idUrl };
        };

        const uploadToFireStore = async ({ cvUrl, idUrl }) => {
            const washingtonRef = await doc(db, 'applicants', localStorage.getItem('userEmail'));
            await updateDoc(washingtonRef, {
                ...getFormData(), cvUrl, idUrl
            });

        };

        return { setInitialValues, uploadFiles };
    };

    return { getData, Nav, Info, Overview, Update };

}

export const EmployerControls = () => {

    const getData = async () => {
        const docRef = doc(db, "employers", localStorage.getItem('userEmail'));
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

            document.querySelector('.companyName').value = data.companyName
            document.querySelector('.name').value = data.name
            document.querySelector('.country').value = data.country
            document.querySelector('.employees').value = data.employees
            document.querySelector('.intro').value = data.intro
            document.querySelector('.registrationNumber').value = data.registrationNumber
            document.querySelector('.twitter').value = data.twitter
            document.querySelector('.phone').value = data.phone
            document.querySelector('.linkedin').value = data.linkedin
            document.querySelector('.website').value = data.website
        
        }

        const getFormData = () => {
            const companyName = document.querySelector('.companyName').value
            const name = document.querySelector('.name').value
            const country = document.querySelector('.country').value
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
            document.querySelector('.info-established-top').textContent = "Since " + data.established
            document.querySelector('.info-name').textContent = data.name
            document.querySelector('.info-employees').textContent = data.employees
            document.querySelector('.info-country').textContent = data.country
            document.querySelector('.info-website').textContent = data.website
            document.querySelector('.info-established').textContent = "Since " + data.established
            document.querySelector('.overview-about').textContent = data.intro
        };

        return { setInfoDetails };
    }

    const Job = () => {

        const getFormData = () => {
            const title = document.querySelector('.title').value
            const salary = document.querySelector('.salary').value
            const country = document.querySelector('.country').value
            const profession = document.querySelector('.profession').value
            const description = document.querySelector('.description').value

            return {
                title,
                salary,
                country,
                profession,
                description
            }
        }

        const uploadJob = async () => {
            console.log('Uploading Job');
            const data = getFormData()

            try {
                await addDoc(doc(db, "jobs", localStorage.getItem('userEmail')),
                    {
                        ...data
                    }
                )

            } catch (e) {
                
            }
        }
        
        return { uploadJob }
    }

    return { Nav, Update, Info, Job }
} 




