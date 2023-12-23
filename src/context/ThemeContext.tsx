import React, { Dispatch, SetStateAction, createContext, useMemo, useState } from "react"

interface Theme {
    isRegular: boolean,
    setIsRegular: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<Theme>({isRegular: true, setIsRegular: () => {}});

interface Props {
    children: React.ReactNode
}
export function ThemeProvider({children}: Props) {
    const [isRegular, setIsRegular] = useState(true)
    const themeValue = useMemo(() => ({isRegular, setIsRegular}), [isRegular])
    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}