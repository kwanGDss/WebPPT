import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { PROBLEM_ISSUES } from '../SlideData';

export function ProblemSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-16">
          <Badge className="bg-red-500/20 text-red-600 border-red-500/30 mb-4">Problem</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">현재 연애 시장의 문제점</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털 시대의 연애는 더욱 복잡해졌지만, 이를 해결할 과학적 도구는 부족합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROBLEM_ISSUES.map((item, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8 group hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{item.problem}</p>
              <div className="mt-auto space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 font-medium text-sm">{item.stat}</p>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-sm font-medium">{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}