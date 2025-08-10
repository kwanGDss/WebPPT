import { Smartphone, Monitor, Palette, Layout, User, BarChart3, History, TrendingUp, Heart, Calendar } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { UI_SCREENS } from '../SlideData';

export function UIDesignSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10 space-y-2">
        {/* 헤더 */}
        <div className="text-center">
          <Badge className="bg-pink-500/20 text-pink-600 border-pink-500/30 mb-1">UI/UX</Badge>
          <h2 className="text-xl font-bold text-gray-900 mb-1">UI/UX 디자인 & 화면 구성</h2>
          <p className="text-sm text-gray-600">감성적이고 직관적인 연애 분석 서비스 인터페이스</p>
        </div>

        {/* 디자인 원칙 - 1줄로 배치 */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { title: "반응형", icon: <Smartphone className="w-3 h-3" />, color: "from-blue-500 to-cyan-500" },
            { title: "감성 컬러", icon: <Palette className="w-3 h-3" />, color: "from-pink-500 to-purple-500" },
            { title: "글래스모피즘", icon: <Monitor className="w-3 h-3" />, color: "from-indigo-500 to-blue-500" },
            { title: "직관적 UX", icon: <Layout className="w-3 h-3" />, color: "from-emerald-500 to-green-500" }
          ].map((item, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-2 text-center">
              <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center mx-auto mb-1`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-800 text-xs">{item.title}</h4>
            </div>
          ))}
        </div>

        {/* 주요 화면들 - 매우 컴팩트하게 */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3">
          <h3 className="font-bold text-gray-800 text-center mb-2 text-sm">주요 화면 구성</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {UI_SCREENS.map((screen, index) => (
              <div key={index} className="border border-gray-200 rounded-md p-2 bg-gradient-to-br from-gray-50 to-white text-center min-w-[120px]">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center mx-auto mb-1">
                  <Layout className="w-3 h-3 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 text-xs leading-tight">{screen.screen}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 기능과 특징을 2개 카드로 분리 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3">
            <h3 className="font-bold text-gray-800 text-center mb-2 text-sm">핵심 기능</h3>
            <div className="space-y-1">
              {[
                "카톡/통화 파일 업로드",
                "AI 감정 분석 & STT",
                "MBTI 맞춤 연애 전략",
                "SNS 공유 & 마이페이지"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3">
            <h3 className="font-bold text-gray-800 text-center mb-2 text-sm">디자인 특징</h3>
            <div className="space-y-1">
              {[
                "화이트-핑크-블루 그라데이션",
                "반투명 글래스 효과",
                "마이크로 애니메이션",
                "터치 친화적 인터페이스"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 마이페이지 내 데이터 섹션 */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3">
          <h3 className="font-bold text-gray-800 text-center mb-3 text-sm">마이페이지 내 데이터</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { icon: <User className="w-4 h-4" />, label: "프로필 정보", value: "개인정보 관리", color: "from-blue-500 to-cyan-500" },
              { icon: <History className="w-4 h-4" />, label: "분석 이력", value: "과거 분석 결과", color: "from-purple-500 to-pink-500" },
              { icon: <BarChart3 className="w-4 h-4" />, label: "통계 대시보드", value: "성공률 분석", color: "from-green-500 to-emerald-500" },
              { icon: <Calendar className="w-4 h-4" />, label: "활동 기록", value: "사용 패턴 분석", color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-2 bg-gradient-to-br from-gray-50 to-white text-center min-w-[140px]">
                <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-1`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-xs mb-1">{item.label}</h4>
                <p className="text-xs text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
          
          {/* 상세 데이터 항목들 */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="space-y-1">
              {[
                "총 분석 횟수: 15회",
                "평균 썸 점수: 78점",
                "성공 가능성 높음: 8회",
                "분석한 상대방: 12명"
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              {[
                "최근 분석: 3일 전",
                "가장 높은 점수: 92점",
                "MBTI 분석: 10회",
                "음성 분석: 7회"
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 기술적 특징 - 한 줄로 압축 */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-2">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md flex items-center justify-center mx-auto mb-1">
                <span className="text-white text-xs font-bold">2s</span>
              </div>
              <span className="text-xs text-gray-700 font-medium">빠른 로딩</span>
            </div>
            <div>
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center mx-auto mb-1">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <span className="text-xs text-gray-700 font-medium">클릭 이내 접근</span>
            </div>
            <div>
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center mx-auto mb-1">
                <span className="text-white text-xs font-bold">A+</span>
              </div>
              <span className="text-xs text-gray-700 font-medium">접근성 점수</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}