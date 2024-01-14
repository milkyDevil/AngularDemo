import { HttpErrorResponse } from '@angular/common/http';

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

  handleError: (error: HttpErrorResponse) => {
    const errorMessage = 'Something went wrong. Please try again later.';
    if (error.error instanceof ErrorEvent) {
      console.error('Client Error:', error.error.message);
      return errorMessage;
    } else {
      console.error('Server Error:', error.status, error.error);
      return error.error.message || errorMessage;
    }
  },
};
