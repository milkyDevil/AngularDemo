export const CommonMixin = {
  sanitizeEmail: (email: string): string => {
    console.log("sanitizeEmailfhgfhgf")
    let ffff = email.trim().toLowerCase()
    console.log("sanitizeEmail",ffff)
    return ffff;
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
