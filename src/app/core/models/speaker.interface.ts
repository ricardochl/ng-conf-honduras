import { Socials } from './socials.interface';

export interface ISpeaker {
  active: boolean;
  name: string;
  order: number;
  photoPath: string;
  photoUrl: string;
  socials: any;
  jobTitle: string;
  company: string;
  bio: string;
}
