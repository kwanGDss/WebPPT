import { Server, Brain, Zap } from 'lucide-react';

export const PERFORMANCE_INDICATORS = [
  { 
    metric: "< 5초", 
    label: "서버 응답 속도", 
    desc: "요구사항 준수", 
    color: "text-blue-500",
    icon: <Server className="w-5 h-5" />
  },
  { 
    metric: "95%+", 
    label: "STT 변환 정확도", 
    desc: "한국어 특화", 
    color: "text-green-500",
    icon: <Brain className="w-5 h-5" />
  },
  { 
    metric: "90%+", 
    label: "감정 분석 정확도", 
    desc: "Google AI 기반", 
    color: "text-purple-500",
    icon: <Zap className="w-5 h-5" />
  }
];