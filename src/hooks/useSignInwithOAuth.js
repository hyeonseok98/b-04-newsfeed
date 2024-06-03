// import { useState, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { closeModal, login } from "../store/slices/authSlice";
// import { signInWithOAuth } from "../supabase/auth";
// import supabase from "../supabase/supabaseClient";

// const initialStatus = {
//   error: "",
//   loading: false,
// };

// const useSignInWithOAuth = () => {
//   const dispatch = useDispatch();
//   const [status, setStatus] = useState(initialStatus);

//   const handleSignInWithOAuth = useCallback(
//     async (provider) => {
//       setStatus({ error: "", loading: true });
//       const { error, session } = await signInWithOAuth(provider);

//       if (error) {
//         setStatus({ error: error.message, loading: false });
//         alert(error.message);
//         return;
//       }

//       if (!session) {
//         setTimeout(async () => {
//           const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

//           if (sessionError) {
//             setStatus({ error: sessionError?.message, loading: false });
//             alert(sessionError?.message);
//             return;
//           }

//           const user = sessionData.session.user;
//           if (user) {
//             dispatch(login(user));
//             dispatch(closeModal());
//           }
//           setStatus({ error: "", loading: false });
//         }, 2000);
//       } else {
//         const user = session.user;
//         if (user) {
//           dispatch(login(user));
//           dispatch(closeModal());
//         }
//         setStatus({ error: "", loading: false });
//       }
//     },
//     [dispatch],
//   );

//   return {
//     handleSignInWithOAuth,
//     status,
//   };
// };

// export default useSignInWithOAuth;
