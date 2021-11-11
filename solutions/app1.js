function setCookie(sting) {
    const expirationMin = 15;
    const dateNow = new Date();
    dateNow.setTime(dateNow.getTime() + (expirationMin * 1000 * 60));
    const expire = dateNow.toString();
    document.cookie = `token=${sting};expires = ${expire};`;
};
export default setCookie;
