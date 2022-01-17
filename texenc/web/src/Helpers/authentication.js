const isAuthenticated = () => {
    var token = localStorage.getItem('token')
    if (token)
        return true
    else
        return false
}
export default isAuthenticated;