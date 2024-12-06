
import { createContext } from 'react'
import { useState } from 'react'
export const PassContext = createContext()

function PassProvider ({children}) {
    const [token, setToken] = useState(true)
    const [use, setUser] = useState({})

    const logout = () => {
       setToken(false)
    };

  return (

    <div>
    <PassContext.Provider
      value={{
        token,
        setToken,
        logout,
        
        use,
        setUser
      
      }}
    >
      {children}
    </PassContext.Provider>
  
    </div>
  )
}

export default PassProvider
