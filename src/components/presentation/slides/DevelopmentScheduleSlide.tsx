import { Calendar, CheckCircle, Clock, Users, User, Monitor, Brain, Database } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { DEVELOPMENT_SCHEDULE, TEAM_MEMBERS } from '../SlideData';

export function DevelopmentScheduleSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-6">
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 mb-3">Schedule</Badge>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">개발 일정</h2>
          <p className="text-lg text-gray-600">전체 담당자: 전영서 | 7월 5주 ~ 8월 4주 (5주간)</p>
        </div>

        {/* 간트 차트 스타일 일정표 */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4 mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">주간 개발 로드맵</h3>
          
          {/* 주별 헤더 */}
          <div className="grid grid-cols-6 gap-2 mb-3">
            <div className="col-span-1 text-center font-medium text-gray-700">주요내용/담당자</div>
            {DEVELOPMENT_SCHEDULE.weeks.map((week, index) => (
              <div key={index} className="text-center text-sm font-medium text-gray-600 px-2 py-2 bg-gray-50 rounded">
                {week}
              </div>
            ))}
          </div>

          {/* 각 작업별 타임라인 */}
          <div className="space-y-2">
            {DEVELOPMENT_SCHEDULE.timeline.map((task, taskIndex) => (
              <div key={taskIndex} className="grid grid-cols-6 gap-2 items-center">
                {/* 작업명 및 담당자 */}
                <div className="col-span-1 text-sm pr-4">
                  <div className="font-medium text-gray-800 mb-1">{task.task}</div>
                  <div className="text-xs text-gray-600">담당: {task.responsible}</div>
                </div>
                
                {/* 주별 진행 상황 */}
                {Array.from({ length: 5 }, (_, weekIndex) => {
                  const week = weekIndex + 1;
                  const isActive = week >= task.startWeek && week <= task.endWeek;
                  const isCompleted = week <= task.endWeek && taskIndex === 0;
                  const isInProgress = week >= task.startWeek && week <= task.endWeek && taskIndex >= 1 && taskIndex <= 2;
                  
                  return (
                    <div key={weekIndex} className="h-6 flex items-center justify-center">
                      {isActive && (
                        <div className={`
                          w-full h-4 rounded 
                          ${isCompleted ? 'bg-green-400' : 
                            isInProgress ? 'bg-blue-400' : 
                            'bg-gray-300'}
                          ${week === task.startWeek ? 'rounded-l-lg' : ''}
                          ${week === task.endWeek ? 'rounded-r-lg' : ''}
                        `} />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* 범례 */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded" />
              <span className="text-sm text-gray-600">완료</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded" />
              <span className="text-sm text-gray-600">진행중</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded" />
              <span className="text-sm text-gray-600">예정</span>
            </div>
          </div>
        </div>


      </div>
    </Slide>
  );
}