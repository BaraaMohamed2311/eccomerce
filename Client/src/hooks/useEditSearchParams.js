import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useEditSearchParams(action) {
  
    let [searchParams, setSearchParams] = useSearchParams();
    
  
    const editSearchParams = useCallback(
      (key, value) => {
        if(action === "SET"){
        setSearchParams((prev) => {
            if(value !== "")
          return { ...Object.fromEntries(new URLSearchParams(prev)), [key]: value };
            else
            prev.delete(key);
          return prev;
        });
      }
      else if(action === "CLEAR"){
        setSearchParams({})
      }

        
      },
      [setSearchParams]
    );
  
    return editSearchParams;
}



