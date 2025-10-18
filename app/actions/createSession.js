'use server'

async function createSession(previousState,formData) {
    const email=formData.get('email')
    const password=formData.get('password')
    if(!email || !password){
        return{
            error: 'Please fill out fields',
        }
        return{
            success: true,
        }

    }

    console.log(email,password)
    
}

export default createSession