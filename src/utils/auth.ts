const AUTH_KEY = "ticketapp_session";

export interface AuthResult {
  success: boolean;
  token?: string;
  error?: string;
}

export const auth = {
  login(email: string, password: string): AuthResult {
    if (email && password.length >= 6) {
      const token = btoa(`${email}:${Date.now()}`);
      localStorage.setItem(AUTH_KEY, token);
      return { success: true, token };
    }
    return { success: false, error: "Invalid credentials" };
  },

  signup(email: string, password: string, confirmPassword: string): AuthResult {
    if (!email || !password) {
      return { success: false, error: "All fields are required" };
    }
    if (password.length < 6) {
      return {
        success: false,
        error: "Password must be at least 6 characters",
      };
    }
    if (password !== confirmPassword) {
      return { success: false, error: "Passwords do not match" };
    }
    const token = btoa(`${email}:${Date.now()}`);
    localStorage.setItem(AUTH_KEY, token);
    return { success: true, token };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_KEY);
  },
};
