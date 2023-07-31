import { useState } from 'react';

const useInput = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  return [user, setUser];
};

export default useInput;
