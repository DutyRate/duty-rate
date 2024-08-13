import { getServerAuthSession } from "~/server/auth";
import LoginForm from "./_components/form";
import LogoutForm from "./_components/logout";

export default async function Login(){
    const session = await getServerAuthSession();
     return (
       <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-[#F3EAE5]/50">
         {session && <LogoutForm />}
         {!session && <LoginForm />}
       </div>
     );
}