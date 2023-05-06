const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

const validateEmail = email => {
    const result = regex.test(email)
    return result 
}

export default validateEmail