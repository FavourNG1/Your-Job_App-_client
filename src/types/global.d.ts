export interface IapiResponseProps {
  jobs: IJob[];
  limit: number;
  offset: number;
  total_count: number;
  updated_at: number;
}

export interface IJob {
  applicationLink: string;
  categories: Array<string>;
  companyLogo: string;
  companyName: string;
  description: string;
  excerpt: string;
  expiryDate: number;
  guid: string;
  image: string;
  locationRestrictions: string[];
  parentCategories: string[];
  pubDate: number;
  timezoneRestrictions: number[];
  title: string;
}

export interface IServerResponse {
  data: unknown;
  error: unknown;
  message: string;
  status: number;
}

export interface IUser {
  createdAt: string;
  email: string;
  f_name: string;
  l_name: string;
  password: string;
  telephone: string;
  token: string;
  updatedAt: string;
  user_id: string;
}
