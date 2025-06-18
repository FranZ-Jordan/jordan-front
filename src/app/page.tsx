import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div
      className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/loginback.webp')" }}
    >
      <div className="w-full max-w-sm bg-white p-1 rounded-xl shadow-lg">
        <LoginForm />
      </div>
    </div>
  )
}
