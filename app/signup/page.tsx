import AuthShell from "@/components/AuthShell";
import { SignupForm } from "@/components/AuthForms";

export const metadata = { title: "Sign Up — ByteSpace" };

export default function SignupPage() {
  return (
    <AuthShell heading="Sign up and come in" blurb="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <SignupForm />
    </AuthShell>
  );
}
