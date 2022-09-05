export interface EmailSender {
  sendEmail(email: string, text: string): Promise<void>;
}
