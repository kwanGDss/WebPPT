import { Zap, Heart, CheckCircle, TrendingUp } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';

export function SolutionSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-8">
          <Badge className="bg-green-500/20 text-green-600 border-green-500/30 mb-2">Solution</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Date Genie AI 솔루션</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기반 텍스트·음성 분석으로 연애 가능성을 정확히 예측하고 맞춤형 전략을 제공
          </p>
        </div>

        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">AI 기반 종합 연애 분석 플랫폼</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              머신러닝과 자연어 처리 기술을 활용하여 카카오톡 대화와 통화 녹음을 종합 분석하고,
              개인화된 연애 전략과 썸 가능성 점수를 제공하는 혁신적인 서비스
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-blue-50 text-blue-700 border-blue-300">대화 패턴 분석</Badge>
              <Badge className="bg-purple-50 text-purple-700 border-purple-300">음성 감정 인식</Badge>
              <Badge className="bg-pink-50 text-pink-700 border-pink-300">맞춤형 전략</Badge>
              <Badge className="bg-green-50 text-green-700 border-green-300">실시간 점수 산출</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">핵심 가치 제안</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>97% 정확도의 감정 분석</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>개인 맞춤형 연애 전략</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>과학적 데이터 기반 조언</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>완벽한 개인정보 보호</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">기대 효과</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0" />
                    <span>연애 성공률 40% 향상</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0" />
                    <span>관계 만족도 85% 증가</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-500 rounded-full flex-shrink-0" />
                    <span>소통 스킬 60% 개선</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0" />
                    <span>자신감 55% 향상</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}