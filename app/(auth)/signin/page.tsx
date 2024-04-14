import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function SignInPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LoginLink>Sign in</LoginLink>
    </div>
  );
}
