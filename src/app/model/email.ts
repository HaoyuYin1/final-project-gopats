export class Email {

  to: string;
  subject: string;
  content: string;

  constructor(to: string, subject: string, content: string) {
    this.to = to;
    this.subject = subject;
    this.content = content;
  }
}
