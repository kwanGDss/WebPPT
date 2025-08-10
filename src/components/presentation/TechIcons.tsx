import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// 레거시 SVG 아이콘들 (필요시 사용)
export function GoogleSTTIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
      <path d="M12 1c-1.5 0-3 1.69-3 3.5v5c0 1.81 1.5 3.5 3 3.5s3-1.69 3-3.5v-5c0-1.81-1.5-3.5-3-3.5z"/>
      <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
      <path d="M12 18v4"/>
      <path d="M8 22h8"/>
    </svg>
  );
}

// AI 기술 로고들 - 더 고품질 이미지 사용
export function WhisperLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png"
      alt="OpenAI Whisper"
      className={`${className} object-contain`}
    />
  );
}

export function GitKrakenLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/gitkraken.svg"
      alt="GitKraken"
      className={`${className} object-contain`}
    />
  );
}

export function GeminiLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
      alt="Google Gemini"
      className={`${className} object-contain`}
    />
  );
}

// Backend 기술 로고들
export function OracleLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/oracle-2.svg"
      alt="Oracle"
      className={`${className} object-contain`}
    />
  );
}

export function JavaLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/java.svg"
      alt="Java"
      className={`${className} object-contain`}
    />
  );
}

export function TomcatLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/apache-tomcat.svg"
      alt="Apache Tomcat"
      className={`${className} object-contain`}
    />
  );
}

export function JDBCLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/java.svg"
      alt="JDBC"
      className={`${className} object-contain`}
    />
  );
}

// Frontend 기술 로고들
export function HTML5Logo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
      alt="HTML5"
      className={`${className} object-contain`}
    />
  );
}

export function CSS3Logo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
      alt="CSS3"
      className={`${className} object-contain`}
    />
  );
}

export function JavaScriptLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
      alt="JavaScript"
      className={`${className} object-contain`}
    />
  );
}

export function BootstrapLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
      alt="Bootstrap"
      className={`${className} object-contain`}
    />
  );
}

// Tools 로고들
export function PythonLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
      alt="Python"
      className={`${className} object-contain`}
    />
  );
}

export function GitHubLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
      alt="GitHub"
      className={`${className} object-contain`}
    />
  );
}

export function EclipseLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://cdn.worldvectorlogo.com/logos/eclipse-11.svg"
      alt="Eclipse IDE"
      className={`${className} object-contain`}
    />
  );
}

// 추가 기술 로고들
export function MatplotlibLogo({ className }: { className?: string }) {
  return (
    <ImageWithFallback
      src="https://matplotlib.org/stable/_static/logo2_compressed.svg"
      alt="matplotlib"
      className={`${className} object-contain`}
    />
  );
}