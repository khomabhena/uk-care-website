const UpdateApplicant = () => {

    const setEventListeners = () => {
        const cv = document.querySelector('.cv')
        const id = document.querySelector('.id')
        const updateButton = document.querySelector('.applicant-update')

        updateButton.addEventListener('click', e => {
            console.log("Updating applicant info")
        })
        cv.addEventListener('change', e => {
            console.log('cv changed');
            console.log(cv.files[0])
        })
        id.addEventListener('click', e => {
            console.log('id changed');
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log('No default')
        // const washingtonRef = doc(db, 'users', userData.uid);
        //     await updateDoc(washingtonRef, {
        //     ...userData
        // });

    }

    return { setEventListeners, handleUpdate }
}

export default UpdateApplicant