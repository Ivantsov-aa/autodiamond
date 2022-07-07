import React, {useState} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Wrapper from "./wrapper";
import AuthorizationContainer from "./components/authorization/authorization-container";
import RegistrationContainer from "./components/authorization/registration-container";
import PrivacyInfo from "./components/personal/privacy-info";
import Orders from "./components/personal/orders";
import TermsService from "./components/personal/terms-service";

const App = (props) => {
  const [isLogged, changeLogged] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (data) => {
    changeLogged(true);
    setAuthUser(data);
  }

  const handleLogOut = () => {
    changeLogged(false);
    setAuthUser(null);
    navigate('/');
  }

  const handleNewPersonalInfo = (data) => {
    const addPersonalInfo = { ...authUser, ...data };
    const localUsers = JSON.parse(localStorage.getItem('users'));
    const changedLocalUsers = localUsers.map(user => {
      if (user.login === addPersonalInfo.login) {
        return addPersonalInfo;
      } else {
        return user;
      }
    })

    localStorage.setItem('users', JSON.stringify(changedLocalUsers));

    setAuthUser(addPersonalInfo);
  }

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='*' element={<Wrapper
          {...props}
          location={location}
          isLogged={isLogged}
          authUser={authUser}
          handleLogOut={handleLogOut} />}
        />
        <Route path='/login/*' element={<AuthorizationContainer
          handleLogIn={handleLogIn}
          isLogged={isLogged}
          authUser={authUser} />}
        />
        <Route path='/registration/*' element={<RegistrationContainer
          navigate={navigate}
          handleLogIn={handleLogIn} />}
        />
        {isLogged &&
          <>
            <Route path='/personal-area/:user/info/*' element={<PrivacyInfo
              {...props}
              isLogged={isLogged}
              authUser={authUser}
              handleLogOut={handleLogOut}
              handleNewPersonalInfo={handleNewPersonalInfo} />}
            />
            <Route path='/personal-area/:user/orders/*' element={<Orders
              {...props}
              isLogged={isLogged}
              authUser={authUser}
              handleLogOut={handleLogOut} />}
            />
            <Route path='/personal-area/:user/terms/*' element={<TermsService
              {...props}
              isLogged={isLogged}
              authUser={authUser}
              handleLogOut={handleLogOut} />}
            />
          </>
        }
      </Routes>
    </div>
  )
}

export default App;
