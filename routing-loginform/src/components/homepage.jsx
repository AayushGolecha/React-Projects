
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  //const details = localStorage.getItem('User-Data');

  return (
    <div style={{margin:"50px auto", width:"430px", backgroundColor:"red", padding:"30px"}}>
      <h1 style={{fontSize:"3rem"}}>Welcome, User!</h1>
      <p style={{fontSize:"1.5rem"}}>This is the home page.</p>
      <button style={{fontSize:"2rem", fontWeight:"600"}} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
