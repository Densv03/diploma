export interface CreateLetter {
  generateLabelRequest: GenerateLabelRequest;
  generateMailDescriptionRequest: GenerateMailDescriptionRequest;
  mailConfigurationRequest: MailConfigurationRequest;
}

interface GenerateLabelRequest {
  name: string;
  description: string;
}

interface GenerateMailDescriptionRequest {
  title: string;
  body: string;
}

interface MailConfigurationRequest {
  from: string;
  style: string;
  usingPlaceHolder: boolean;
  templateCount: number;
  sentenceCount: number;
}
