// import { useState, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { closeModal } from "../store/slices/authSlice";
// import { signInWithEmail, signUp } from "../supabase/auth";

// const initialStatus = { error: "", loading: false };

// const useAuthWithEmail = () => {
//   const dispatch = useDispatch();
//   const [status, setStatus] = useState(initialStatus);

//   const handleAuthWithEmail = useCallback(
//     async (isSignIn = false, credentials) => {
//       setStatus({ error: "", loading: true });
//       const { email, password, displayName } = credentials;

//       try {
//         const { error } = isSignIn
//           ? await signInWithEmail(email, password)
//           : await signUp(email, password, displayName);

//         if (error) {
//           setStatus({ error: error.message, loading: false });
//           alert(error.message);
//         } else {
//           setStatus(initialStatus);
//           if (isSignIn) {
//             alert("로그인 완료");
//           } else {
//             alert("이메일 본인확인...");
//           }
//           dispatch(closeModal());
//         }
//       } catch (err) {
//         setStatus({ error: err.message, loading: false });
//         console.error(err);
//       }
//     },
//     [dispatch],
//   );

//   return {
//     status,
//     handleAuthWithEmail,
//   };
// };

// export default useAuthWithEmail;

export default useAuth;
