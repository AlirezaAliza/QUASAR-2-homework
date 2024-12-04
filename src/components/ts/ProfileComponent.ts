import { ref } from 'vue';

const profileTemp = ref({
  modal: false,
  id: 0,
  username: 'Alireza Alizadeh',
  email: 'Alireza.bmw@gmail.com',
  avatar: '../../../public/images/avatar.png',
  newAvatar: undefined,
  password: '',
  role: 'user',
});

export {profileTemp}
