import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getUserCredentialsCookie = () => {
    const username = cookies.get('username');
    const JWT = cookies.get('JWT');
    return {username, JWT};
};

export const setUserCredentialsCookie = (userObj) => {
    cookies.set('username', userObj.username);
    cookies.set('JWT', userObj.access_token);
};

export const removeUserCredentialsCookie = () => {
    cookies.remove('username');
    cookies.remove('JWT');
};
// cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('myCat')); // Pacman