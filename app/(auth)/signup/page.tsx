import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function SignUpPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
