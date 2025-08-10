export type PageType = 'login' | 'register' | 'upload' | 'analysis' | 'main' | 'mypage';

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface AnalysisData {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  date?: string;
  partnerName?: string;
  loveScore?: number;
  emotionCurve?: number[];
  bestMoment?: string;
  loveQuote?: string;
  mbtiStrategy?: string;
  confessionTiming?: string;
  conversationBalance?: {
    me: number;
    partner: number;
  };
  summary?: string;
  emotionAnalysis?: {
    positive: number;
    negative: number;
    neutral: number;
  };
  result?: any;
}

