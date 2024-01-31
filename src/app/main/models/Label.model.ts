import { Template } from "./template.model";

export interface Label {
  label: string;
  createdAt: string;
  templates: Template[];
}
