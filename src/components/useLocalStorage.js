import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const[myState,setmyState] = useState(value);

  updateMyStorage(stateVar,myState);
  return [myState,setmyState];
};

const updateMyStorage = (key,val) =>{
      localStorage.setItem(key,val);
}

export default useLocalStorage;
