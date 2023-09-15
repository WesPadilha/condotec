import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

export default function Private({ children }){
  const { signed, loading } = useContext(AuthContext);

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return  <Navigate to="/entrar" />
  }


  return children;
}