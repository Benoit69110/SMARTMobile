export function isZipCode(zip){
    var res=/^\d{2}[ ]?\d{3}$/.test(zip)
    return res
}

export function validateEmail(mail){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail); 
} 