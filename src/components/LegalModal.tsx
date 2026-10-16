import React from 'react';

interface LegalModalProps {
  type: 'soc2' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#10131a] border border-[#3b494b]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-[#e1e2ec]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#272a32] bg-[#191b23]">
          <h3 className="text-base font-semibold text-white">
            {type === 'soc2' && 'SOC 2 Type II Security Compliance'}
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms of Service & Code Ownership'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#b9cacb] hover:text-white hover:bg-[#272a32] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-6 text-xs text-[#b9cacb] space-y-3 leading-relaxed max-h-[70vh] overflow-y-auto">
          {type === 'soc2' && (
            <>
              <p>
                CognitiveOps enforces stringent SOC 2 Type II compliance controls across all software engineering pods, production CI/CD deployments, and infrastructure pipelines.
              </p>
              <div className="p-3 rounded-lg bg-[#191b23] border border-[#272a32] space-y-1.5 text-white">
                <div>🔒 <strong>Zero Third-Party Training:</strong> Client proprietary data is never used to train public foundational AI models.</div>
                <div>🛡️ <strong>Encrypted at Rest &amp; Transit:</strong> AES-256 and TLS 1.3 encryption across all databases, vector indices, and API gateways.</div>
                <div>📋 <strong>Audit Reports Available:</strong> SOC 2 Type II reports are accessible to enterprise clients under mutual NDA.</div>
              </div>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                At CognitiveOps, we respect your data and privacy. We do not sell or monetize personal information. Information submitted via inquiry forms or live screen demos is utilized exclusively to provide software development scoping, technical feedback, and customer support.
              </p>
              <p>
                We do not use telemetry trackers or ad networks. You may request data deletion at any time by emailing <code>privacy@cognitiveops.ai</code>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                CognitiveOps guarantees <strong>100% full code ownership</strong> to our clients upon project delivery. There is zero proprietary lock-in. All repositories, cloud infrastructures, and vector database schemas belong entirely to your organization.
              </p>
              <p>
                Bi-weekly deliverables are accompanied by full documentation, automated integration test suites, and transparent architectural specifications.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-3 border-t border-[#272a32] bg-[#191b23] text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-xs hover:bg-[#7df4ff]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
