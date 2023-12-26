import { Template } from "./template.model";

export interface Label {
  label: string;
  createdAt: Date;
  templates: Template[];
}
