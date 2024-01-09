export interface SendMailRequest {
  title: string;
  template: string;
  usingPlaceHolder: boolean;
  groupName: string;
  from: string;
  pushEmailRequests: {
    email: string;
  }[];
}
