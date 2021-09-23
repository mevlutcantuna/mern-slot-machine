export const isLogin = () => {
    if(localStorage.getItem("accessToken")){
        return true
    }
    
    return false;
}

export const isStarted = (value) => {
    
    if(localStorage.getItem("isStarted")){
        return true
    }
    
    return false;
}