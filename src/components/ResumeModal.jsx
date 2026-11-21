import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal } = portfolioData;
  const resumeUrl = personal.resumePdf;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kishore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    // Open the actual resume PDF so the browser's PDF viewer can print it.
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Preview Modal">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-line" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-[#fbfbfe]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-600 inline-block animate-pulse" />
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-ink">Resume Document — {personal.name}</h3>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleDownload} className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 text-xs font-mono font-medium shadow-sm transition-colors" title="Download PDF file">Download PDF</button>
            <button onClick={handlePrint} className="px-3 py-1.5 rounded-lg bg-white border border-line hover:bg-gray-50 text-xs font-mono font-medium text-ink transition-colors" title="Open PDF to print">Print</button>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors" aria-label="Close modal">✕</button>
          </div>
        </div>
        <div className="flex-1 min-h-0 bg-white" style={{ height: '75vh' }}>
          <iframe src={resumeUrl} title="Kishore M — Updated Resume PDF" className="w-full h-full border-0" />
        </div>
        <div className="px-6 py-3 border-t border-line bg-[#fbfbfe] flex justify-between items-center text-xs font-mono text-ink-soft">
          <span>Official resume of Kishore M</span>
          <button onClick={handleDownload} className="text-red-600 hover:text-red-700 font-semibold">Download PDF File →</button>
        </div>
      </div>
    </div>
  );
}
