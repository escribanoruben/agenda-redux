import { Technology } from '../enums/technology.enum';

export interface Contact {
  name: string;
  phoneNumber: string;
  birthday: Date;
  technologies: Array<Technology>;
}
