export interface Attachment {
  url: string;
}

export interface ActivityCardProps {
  activity: Activity;
  searchParams: Record<string, string | null | undefined>;
}

export interface Activity {
  id: string;
  fields: ActivityFields;
}

export interface ActivityFields {
  Attachments?: Attachment[];
  Name: string;
  Details: string;
  Website?: string;
  Facebook?: string;
  Instagram?: string;
  ActivityTypes?: string[];
}
