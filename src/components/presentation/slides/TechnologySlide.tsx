import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { AISection } from '../sections/AISection';
import { BackendSection } from '../sections/BackendSection';
import { FrontendSection } from '../sections/FrontendSection';
import { ToolsSection } from '../sections/ToolsSection';
import { PerformanceSection } from '../sections/PerformanceSection';

export function TechnologySlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-4">
          <Badge className="bg-cyan-500/20 text-cyan-600 border-cyan-500/30 mb-2">Technology Stack</Badge>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">기술 스택 & AI 모델</h2>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold text-cyan-600">요구사항 정의서 기반 최적화된 기술 아키텍처</span>
          </p>
          <p className="text-gray-500">성능 요구사항을 충족하는 검증된 기술 스택</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AISection />
            <ToolsSection />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BackendSection />
            <FrontendSection />
          </div>
          
          <PerformanceSection />
        </div>
      </div>
    </Slide>
  );
}