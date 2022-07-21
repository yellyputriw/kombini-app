// import React, { useState } from "react";

// const authContext = React.createContext({
//   token: "",
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// export const AuthContextProvider = ({ children }) => {
//   const [token, setToken] = useState(null);

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <authContext.Provider value={contextValue}>{children}</authContext.Provider>
//   );
// };

// export default authContext;
