/* eslint-disable react/prop-types */
import MainLayout from "../components/MainLayout"
import { useParams } from "react-router-dom"

const ProfilePage = ({isLogged, setIsLogged}) => {
    const { name } = useParams()
  return (
    <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} name={name}>
        <div>ProfilePage</div>
    </MainLayout >
  )
}

export default ProfilePage