import {
  andreyAvatar,
  vasiliyAvatar,
  olegAvatar,
  kostiyaAvatar
} from '../assets';

export const users = {
  id_1: {
    id: 1, name: 'Andrey', surname: 'Bozhenko', age: 30, avatar: andreyAvatar
  },
  id_2: {
    id: 2, name: 'Vasiliy', surname: 'Strong', age: 15, avatar: vasiliyAvatar
  },
  id_3: {
    id: 3, name: 'Oleg', surname: 'Puber', age: 31, avatar: olegAvatar
  },
  id_4: {
    id: 4, name: 'Kostiya', surname: 'Lom', age: 26, avatar: kostiyaAvatar
  },
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      const result = Object.values(users);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const result = users[`id_${id}`];
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};
