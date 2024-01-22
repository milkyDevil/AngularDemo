export const CommonMixin = {
  sanitizeEmail: (email: string): string => {
    return email.trim().toLowerCase();
  },

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword(password: string): boolean {
    const minLength = 8;
    return password.length >= minLength;
  },

};
