// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();
  
//     const handleSuccess = (response) => {
//       console.log('Google OAuth Success:', response);
//       // Save user info in state or context if necessary
//       navigate('/dashboard'); // Redirect to the dashboard on successful login
//     };
  
//     const handleError = () => {
//       console.log('Google OAuth Error');
//     };
  
//     return (
//       <div>
//         <h1>Login</h1>
//         <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
//       </div>
//     );
//   };
  
//   export default Login;