export function isZipCode(zip){
    var res=/^\d{2}[ ]?\d{3}$/.test(zip)
    return res
}