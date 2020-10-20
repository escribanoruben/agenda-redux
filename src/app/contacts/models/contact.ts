import { Technology } from '../enums/technology.enum';

export interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
  birthday: Date;
  technologies: Array<Technology>;
}
