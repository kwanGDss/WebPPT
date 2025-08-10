import { ArrowRight, CheckCircle } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { USER_JOURNEY } from '../SlideData';

export function UserJourneySlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-6">
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 mb-3">User Journey</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">사용자 여정 & 유스케이스</h2>
          <p className="text-lg text-gray-600">요구사항 정의서 기반 5단계 사용자 경험</p>
        </div>

        <div className="space-y-4">
          {USER_JOURNEY.map((journey, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4 relative overflow-hidden">
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${journey.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{journey.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{journey.title}</h3>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                      {journey.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{journey.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {journey.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {index < USER_JOURNEY.length - 1 && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </Slide>
  );
}