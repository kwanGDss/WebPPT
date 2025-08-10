import { Heart } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';

export function TitleSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 text-center z-10">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <span className="text-3xl font-bold text-gray-800">Date Genie AI</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI 기반 연애 분석
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            서비스 기획안
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          텍스트·음성을 통한 대화 분석 기반 연애 가능성 예측 서비스
          <br />
          "AI가 알려주는 완벽한 썸 전략"
        </p>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            <span className="text-gray-600">팀</span>
            <span className="font-bold text-gray-800">꿈쩍</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl px-6 py-3">
            <div className="text-gray-600 text-sm">
              팀 꿈쩍 | 2025.08.11
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}