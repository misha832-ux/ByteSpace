import AuthShell from "@/components/AuthShell";
import { LoginForm } from "@/components/AuthForms";

export const metadata = { title: "Sign In — ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell heading="Sign in with ease" blurb="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <LoginForm />
    </AuthShell>
  );
}
