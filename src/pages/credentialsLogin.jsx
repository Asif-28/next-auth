import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css"

import { signIn, useSession } from "next-auth/react";


const CreLogin = () => {
    const router = useRouter();
    const { data: session } = useSession()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
    });
    // router.push('./account')

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = async () => {
    await signIn('google')
   
  }
  const handleGithubLogin = async () => {
    await signIn('github')
    
  }

if(session)
{
router.push('/')
}
else{
    return (
        <div className={styles.main}>
          <div className={styles.form}  >
            <div className="">
              <form
                className=""
                onSubmit={submitHandler}
              >
                <h1 className={styles.loginText}>Login</h1>
                <div className={styles.item}>
                  <label className="form-label" htmlFor="email_field">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="abc@example.com"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.item}>
                  <label className="form-label" htmlFor="password_field">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
    
                <button
                  type="submit"
                  className={styles.btn }
                >
                  Sign in
                </button>
    
                <div >
                  <p>
                    Not a member? <Link className={styles.reg} href="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
            <button className={styles.btn} onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
          
          <button className={styles.btn} onClick={handleGithubLogin}>
            Sign in with Github
          </button>
          </div>
        </div>
      );
    
}
};

export default CreLogin;