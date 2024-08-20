import Header from "@/components/layout/header";
import SignupForm from "@/components/signupform";
import { cookies } from "next/headers";

export default function RegisterPage() {

  async function getToken(token)
  {
    "use server";
      cookies().set('token', token);
  }
  return (
    <>
    <Header/>
        <SignupForm getToken={getToken}/>
    </>
  );
}
