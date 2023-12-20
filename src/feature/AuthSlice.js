import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import {
  addUserLocalStorage,
  removeLocalStorage,
  getUserFromLocalStorage,
} from "../localStorage";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

// /////
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isLoading: false,
  },
  reducers: {
    logUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logOut: (state) => {
      removeLocalStorage();
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { logUser, setLoading, logOut } = authSlice.actions;

// LOGINUSER

export const signIn = (email, password) => async (dispatch) => {
  const trimmedEmail = email.trim();

  signInWithEmailAndPassword(auth, trimmedEmail, password)
    .then((userCredential) => {
      const user = userCredential.user;
      addUserLocalStorage(user);
      dispatch(logUser(user));
      dispatch(setLoading(true));
    })
    .then(() => {
      toast.success("Logged In");
    })
    .catch((error) => {
      toast.warning(error.message);
    });
};

// SIGNUP USER

export const signUp = (email, password, name) => async (dispatch) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      addUserLocalStorage(user);
      return updateProfile(user, { displayName: name });
    })
    .then(() => {
      const user = getAuth().currentUser; // Corrected the usage of updateCurrentUser
      dispatch(logUser(user));
      dispatch(setLoading(true));
    })
    .then(() => {
      toast.success("Profile created");
    })
    .catch((error) => {
      toast.warning(error.message);
      dispatch(setLoading(false));
    });
};

// Google Login

export const signInWithGoogle = () => async (dispatch) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Additional actions after successful login
    dispatch(logUser(user));
    dispatch(setLoading(true));
    toast.success("Logged In with Google");
  } catch (error) {
    toast.warning(error.message);
  }
};

// RESET PASSWORD

export const reset_password = (email) => async (dispatch) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("reset link sent to your mail");
      dispatch(setLoading(true));
    })
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      toast.warning(error.message);
      dispatch(setLoading(false));
    });
};

export default authSlice.reducer;
