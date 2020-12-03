const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  };
  
  export default async function loginApi(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks!') {
          return resolve(mockedUser);
        } else if (username !== 'wizeline' && password === 'Rocks!') {
         return reject(new Error('Username invalid'));
        } else if (password !== 'Rocks!' && username === 'wizeline') {
         return reject(new Error('Password invalid'));
        }
        return reject(new Error('Username and password invalid'));
      }, 500);
    });
  }