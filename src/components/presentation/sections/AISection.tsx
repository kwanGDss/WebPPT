import { Brain } from 'lucide-react';

import { Badge } from '../../ui/badge';
import { TECH_STACK } from '../SlideData';
import { GoogleSTTIcon, GeminiLogo, WhisperLogo, MatplotlibLogo, PythonLogo } from '../TechIcons';

export function AISection() {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
        <Brain className="w-6 h-6 text-purple-500" />
        🤖 Google AI & STT 핵심
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECH_STACK.ai.map((tech, index) => (
          <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4 text-center hover:bg-white/60 transition-all duration-300">
            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-gray-200`}>
              {tech.name === "Google Gemini" ? (
                <GeminiLogo className="w-8 h-8" />
              ) : tech.name === "OpenAI Whisper" ? (
                <WhisperLogo className="w-8 h-8" />
              ) : tech.name === "Python" ? (
                <PythonLogo className="w-8 h-8" />
              ) : tech.name === "matplotlib" ? (
                <MatplotlibLogo className="w-8 h-8" />
              ) : (
                <GoogleSTTIcon className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <h4 className="font-bold text-gray-800 mb-1">{tech.name}</h4>
            <p className="text-gray-600 text-xs mb-2 leading-relaxed">{tech.desc}</p>
            <Badge className="bg-green-100 text-green-700 border-green-300 text-xs font-semibold">
              정확도 {tech.accuracy}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}