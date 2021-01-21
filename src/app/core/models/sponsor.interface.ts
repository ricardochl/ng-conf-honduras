
export enum SponsorShipPlan{
  platinum,
  gold,
  silver,
  bronze
}

export interface ISponsor {
  active: boolean;
  logoPath: string;
  logoUrl: string;
  name: string;
  sponsorShipPlan: SponsorShipPlan;
  websiteUrl: string;
}
