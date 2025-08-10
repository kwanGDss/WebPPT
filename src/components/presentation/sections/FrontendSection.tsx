import { Monitor, LayoutGrid } from 'lucide-react';

import { Badge } from '../../ui/badge';
import { TECH_STACK } from '../SlideData';
import { HTML5Logo, CSS3Logo, JavaScriptLogo, BootstrapLogo } from '../TechIcons';

export function FrontendSection() {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
        <Monitor className="w-6 h-6 text-green-500" />
        🌐 Web Frontend
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TECH_STACK.frontend.map((tech, index) => (
          <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3 text-center hover:bg-white/60 transition-all duration-300">
            <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md border border-gray-200`}>
              {tech.name === "HTML5" ? (
                <HTML5Logo className="w-6 h-6" />
              ) : tech.name === "CSS3" ? (
                <CSS3Logo className="w-6 h-6" />
              ) : tech.name === "JavaScript" ? (
                <JavaScriptLogo className="w-6 h-6" />
              ) : (
                <BootstrapLogo className="w-6 h-6" />
              )}
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">{tech.name}</h4>
            <p className="text-gray-600 text-xs mb-2">{tech.desc}</p>
            <Badge variant="outline" className="text-xs border-green-300 text-green-700">
              {tech.feature}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}