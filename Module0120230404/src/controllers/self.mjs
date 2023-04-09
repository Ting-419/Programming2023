const getMyInfo = () => {
    return 'My name is Ting, my group is KP-14.';
}

const getCurrentTime = () => {
   
    return {currentTime :new Date().toISOString()};
}
export {
    getMyInfo,
    getCurrentTime
}