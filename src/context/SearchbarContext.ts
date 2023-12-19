import React, { Dispatch, SetStateAction } from "react";

interface context {
    setIsSearchBarVisible: Dispatch<SetStateAction<boolean>>
  }
  export const IsSearchBarVisible = React.createContext<context>({setIsSearchBarVisible: () => {}});