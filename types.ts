
export type Category = 'strength' | 'improvement' | 'value';

export interface SummaryCardData {
  id: string;
  category: Category;
  title: string;
  items: string[];
  icon: string;
}

export interface InsightItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStation {
  id: string;
  topic: string;
  feedback: string;
  action: string;
  metric: string;
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
  category: 'Mind' | 'Heart' | 'Legs';
}

export interface EmotionalTag {
  text: string;
  weight: number;
}
