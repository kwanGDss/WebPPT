import { Settings, GitFork, Code2 } from 'lucide-react';

import { Badge } from '../../ui/badge';
import { TECH_STACK } from '../SlideData';
import { PythonLogo, GitHubLogo, GitKrakenLogo, EclipseLogo } from '../TechIcons';

export function ToolsSection() {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
        <Settings className="w-6 h-6 text-purple-500" />
        🛠️ Development Tools
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TECH_STACK.tools.map((tool, index) => (
          <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-3 text-center hover:bg-white/60 transition-all duration-300">
            <div className={`w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md`}>
              {tool.name === "Python" ? (
                <PythonLogo className="w-6 h-6" />
              ) : tool.name === "GitHub" ? (
                <GitHubLogo className="w-6 h-6" />
              ) : tool.name === "GitKraken" ? (
                <GitKrakenLogo className="w-6 h-6" />
              ) : (
                <EclipseLogo className="w-6 h-6" />
              )}
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">{tool.name}</h4>
            <p className="text-gray-600 text-xs mb-2">{tool.desc}</p>
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
              {tool.feature}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}