import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";

interface LoginCardProps {
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  keepSignedIn: boolean;
  setKeepSignedIn: (v: boolean) => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  authError?: string | null;
}

export default function LoginCard({
  email,
  setEmail,
  password,
  setPassword,
  keepSignedIn,
  setKeepSignedIn,
  showPassword,
  setShowPassword,
  isLoading,
  onSubmit,
  authError,
}: LoginCardProps) {
  return (
    <div
      className="w-full max-w-md mx-auto rounded-2xl border border-[oklch(0.28_0.03_280)] bg-[oklch(0.14_0.025_280)/90] backdrop-blur-xl shadow-2xl p-8"
      data-ocid="login.card"
    >
      <div className="mb-7">
        <h2 className="font-display font-bold text-2xl text-[oklch(0.94_0.02_280)] leading-tight">
          Sign In to Your Account
        </h2>
        <p className="text-sm font-body text-[oklch(0.54_0.02_280)] mt-1.5">
          Welcome back. Enter your credentials to continue.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-5"
        data-ocid="login.form"
      >
        {/* Auth error */}
        {authError && (
          <div
            className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[oklch(0.20_0.04_22)] border border-[oklch(0.45_0.15_22)] text-[oklch(0.85_0.08_22)] text-sm font-body"
            data-ocid="login.error_state"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-sm font-body font-medium text-[oklch(0.75_0.02_280)]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input bg-[oklch(0.18_0.02_280)] border-[oklch(0.28_0.03_280)] text-[oklch(0.94_0.02_280)] placeholder-[oklch(0.42_0.02_280)] focus:ring-accent focus:border-accent"
            required
            data-ocid="login.email_input"
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-body font-medium text-[oklch(0.75_0.02_280)]"
            >
              Password
            </label>
            <button
              type="button"
              className="text-xs font-body text-accent hover:opacity-80 transition-smooth bg-transparent border-0 p-0 cursor-pointer"
              data-ocid="login.forgot_password_link"
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input pr-11 bg-[oklch(0.18_0.02_280)] border-[oklch(0.28_0.03_280)] text-[oklch(0.94_0.02_280)] placeholder-[oklch(0.42_0.02_280)] focus:ring-accent focus:border-accent"
              required
              data-ocid="login.password_input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[oklch(0.48_0.02_280)] hover:text-[oklch(0.72_0.02_280)] transition-smooth"
              aria-label={showPassword ? "Hide password" : "Show password"}
              data-ocid="login.toggle_password_button"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg font-display font-semibold text-sm text-[oklch(0.10_0.02_280)] transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[oklch(0.14_0.025_280)] focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 200), oklch(0.6 0.15 280))",
          }}
          data-ocid="login.submit_button"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span data-ocid="login.loading_state">Signing in…</span>
            </>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Keep signed in */}
        <div className="flex items-center gap-2.5">
          <input
            id="keep-signed-in"
            type="checkbox"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
            className="w-4 h-4 rounded border-[oklch(0.32_0.03_280)] bg-[oklch(0.18_0.02_280)] accent-accent cursor-pointer"
            data-ocid="login.keep_signed_in_checkbox"
          />
          <label
            htmlFor="keep-signed-in"
            className="text-sm font-body text-[oklch(0.56_0.02_280)] cursor-pointer select-none"
          >
            Keep me signed in
          </label>
        </div>
      </form>
    </div>
  );
}
