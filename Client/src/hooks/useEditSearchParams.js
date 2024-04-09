import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useEditSearchParams() {
  
    let [searchParams, setSearchParams] = useSearchParams();
    
  
    const editSearchParams = useCallback(
      (key, value) => {
        setSearchParams((prev) => {
            if(value !== "")
          return { ...Object.fromEntries(new URLSearchParams(prev)), [key]: value };
            else
            prev.delete(key);
          return prev;
        });

        
      },
      [setSearchParams]
    );
  
    return editSearchParams;
}



