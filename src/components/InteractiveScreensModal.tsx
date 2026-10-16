import React, { useState } from 'react';
import { ActiveScreenType } from '../types';

interface InteractiveScreensModalProps {
  activeScreen: ActiveScreenType;
  onClose: () => void;
  onSelectServiceForContact?: (serviceName: string, notes?: string) => void;
}

export const InteractiveScreensModal: React.FC<InteractiveScreensModalProps> = ({
  activeScreen,
  onClose,
  onSelectServiceForContact,
}) => {
  const [currentTab, setCurrentTab] = useState<'crm' | 'pm' | 'web-quote'>(
    activeScreen || 'crm'
  );

  // CRM demo state
  const [selectedDeal, setSelectedDeal] = useState<number | null>(0);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [summaryGenerated, setSummaryGenerated] = useState(false);

  // PM demo state
  const [rebalanced, setRebalanced] = useState(false);
  const [simulatedFilter, setSimulatedFilter] = useState<'all' | 'critical' | 'completed'>('all');

  // Web Quote demo state
  const [appType, setAppType] = useState('saas');
  const [selectedFrontend, setSelectedFrontend] = useState('next');
  const [selectedBackend, setSelectedBackend] = useState('node');
  const [aiFeatures, setAiFeatures] = useState<string[]>(['agents', 'rag']);

  if (!activeScreen) return null;

  const deals = [
    {
      id: 0,
      title: 'Synthetix Infrastructure Scale',
      company: 'Synthetix Corp',
      val: '$65,000',
      score: 96,
      likelihood: '91% close probability',
      status: 'Technical Scoping',
      aiNotes: 'CTO requested SOC2 compliance checklist & latency benchmarks for LLM orchestration pipelines.',
      lastActivity: '12 mins ago · Auto-logged from Zoom call',
    },
    {
      id: 1,
      title: 'Hyperscale Custom CRM Migration',
      company: 'Hyperscale Inc',
      val: '$88,000',
      score: 91,
      likelihood: '84% close probability',
      status: 'Contract Review',
      aiNotes: 'Legal reviewed DPA agreement. Identified 2 redlines on data retention policies.',
      lastActivity: '2 hours ago · Automated email sync',
    },
    {
      id: 2,
      title: 'Vectr Systems Analytics Engine',
      company: 'Vectr Systems',
      val: '$42,000',
      score: 87,
      likelihood: '76% close probability',
      status: 'Discovery',
      aiNotes: 'Founder highlighted existing bottleneck in manual data entry across 4 legacy spreadsheets.',
      lastActivity: '5 hours ago · Calendly scheduled',
    },
  ];

  const toggleAiFeature = (feat: string) => {
    if (aiFeatures.includes(feat)) {
      setAiFeatures(aiFeatures.filter((f) => f !== feat));
    } else {
      setAiFeatures([...aiFeatures, feat]);
    }
  };

  const calculateEstimate = () => {
    let weeks = 3;
    let basePrice = 24000;
    if (appType === 'enterprise') {
      weeks += 3;
      basePrice += 20000;
    } else if (appType === 'saas') {
      weeks += 2;
      basePrice += 12000;
    }
    weeks += aiFeatures.length * 1;
    basePrice += aiFeatures.length * 6000;
    return { weeks, price: basePrice };
  };

  const estimate = calculateEstimate();

  const handleExportToContact = () => {
    const serviceName =
      currentTab === 'crm'
        ? 'Intelligent Enterprise CRM'
        : currentTab === 'pm'
        ? 'Predictive Project Management Tool'
        : 'Custom Web & SaaS Application';

    const notes =
      currentTab === 'web-quote'
        ? `Configured: ${appType.toUpperCase()} with ${selectedFrontend.toUpperCase()} + ${selectedBackend.toUpperCase()}. AI Features: ${aiFeatures.join(
            ', '
          )}. Estimated: ~${estimate.weeks} weeks / $${estimate.price.toLocaleString()}.`
        : `Interested in live demo & architecture review for ${serviceName}.`;

    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceName, notes);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#10131a] border border-[#3b494b]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-[#e1e2ec]">
        
        {/* Top Modal Navigation Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#272a32] bg-[#191b23]">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white tracking-tight">
                  CognitiveOps Live Product Screens
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#272a32] text-[#00f0ff]">
                  Interactive Preview
                </span>
              </div>
              <p className="text-xs text-[#b9cacb]">
                Explore actual user interfaces engineered for our enterprise partners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Screen Switcher Tabs */}
            <div className="hidden sm:flex items-center gap-1 bg-[#10131a] p-1 rounded-lg border border-[#272a32]">
              <button
                onClick={() => setCurrentTab('crm')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  currentTab === 'crm'
                    ? 'bg-[#3131c0] text-white shadow-sm'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                AI CRM Screen
              </button>
              <button
                onClick={() => setCurrentTab('pm')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  currentTab === 'pm'
                    ? 'bg-[#006970] text-[#dbfcff] shadow-sm'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                Intelligent PM Screen
              </button>
              <button
                onClick={() => setCurrentTab('web-quote')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  currentTab === 'web-quote'
                    ? 'bg-[#272a32] text-[#00f0ff] shadow-sm'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                Architecture Configurator
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#b9cacb] hover:text-white hover:bg-[#272a32] transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="sm:hidden flex border-b border-[#272a32] bg-[#10131a]">
          <button
            onClick={() => setCurrentTab('crm')}
            className={`flex-1 py-2 text-center text-xs font-medium ${
              currentTab === 'crm' ? 'border-b-2 border-[#c0c1ff] text-[#c0c1ff]' : 'text-[#b9cacb]'
            }`}
          >
            AI CRM
          </button>
          <button
            onClick={() => setCurrentTab('pm')}
            className={`flex-1 py-2 text-center text-xs font-medium ${
              currentTab === 'pm' ? 'border-b-2 border-[#00f0ff] text-[#00f0ff]' : 'text-[#b9cacb]'
            }`}
          >
            Predictive PM
          </button>
          <button
            onClick={() => setCurrentTab('web-quote')}
            className={`flex-1 py-2 text-center text-xs font-medium ${
              currentTab === 'web-quote' ? 'border-b-2 border-[#6ffbbe] text-[#6ffbbe]' : 'text-[#b9cacb]'
            }`}
          >
            Web Configurator
          </button>
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#10131a]">

          {/* TAB 1: AI ENTERPRISE CRM */}
          {currentTab === 'crm' && (
            <div className="space-y-5">
              {/* Telemetry ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3131c0]/30 border border-[#3131c0] flex items-center justify-center text-[#c0c1ff]">
                    <span className="material-symbols-outlined text-lg">contact_phone</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">CognitiveOps CRM Suite</h4>
                    <p className="text-xs text-[#b9cacb]">Automated lead enrichment, voice AI minutes &amp; predictive closing scores</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#272a32] text-xs font-mono text-[#6ffbbe]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#65f2b5]"></span>
                    3 Enriched Deals Today
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#272a32] text-xs font-mono text-[#00f0ff]">
                    Mailbox Sync: Online
                  </span>
                </div>
              </div>

              {/* Main CRM Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Deals Pipeline Column */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#b9cacb]">
                      Active High-Value Opportunities
                    </span>
                    <span className="text-xs text-[#00f0ff] font-medium">Auto-Scored by AI</span>
                  </div>

                  <div className="space-y-2.5">
                    {deals.map((deal) => (
                      <div
                        key={deal.id}
                        onClick={() => setSelectedDeal(deal.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          selectedDeal === deal.id
                            ? 'bg-[#1d1f27] border-[#00f0ff]/60 shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                            : 'bg-[#191b23] border-[#272a32] hover:border-[#3b494b]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h5 className="font-semibold text-sm text-white">{deal.title}</h5>
                          <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[#3131c0]/40 text-[#c0c1ff] border border-[#3131c0]">
                            {deal.val}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[#b9cacb] mb-2">
                          <span>{deal.company}</span>
                          <span className="font-mono text-[#6ffbbe]">{deal.likelihood}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#272a32] text-[11px]">
                          <span className="text-[#849495]">{deal.lastActivity}</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#272a32] text-xs font-mono text-[#dbfcff]">
                            AI Score: {deal.score}/100
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deal Detail & AI Assistant Panel */}
                <div className="lg:col-span-7 bg-[#191b23] rounded-xl border border-[#272a32] p-4.5 space-y-4">
                  {selectedDeal !== null && (
                    <>
                      <div className="flex items-center justify-between pb-3 border-b border-[#272a32]">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-white">
                              {deals[selectedDeal].title}
                            </h4>
                            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                              {deals[selectedDeal].status}
                            </span>
                          </div>
                          <p className="text-xs text-[#b9cacb] mt-0.5">
                            Client: {deals[selectedDeal].company} · Value: {deals[selectedDeal].val}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-[#b9cacb]">Proprietary Match</div>
                          <div className="text-base font-mono font-bold text-[#6ffbbe]">
                            {deals[selectedDeal].score}% Fit
                          </div>
                        </div>
                      </div>

                      {/* Lead Intelligence Box */}
                      <div className="p-3.5 rounded-lg bg-[#10131a] border border-[#272a32] space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#00f0ff]">
                          <span className="material-symbols-outlined text-sm">psychology</span>
                          <span>Cognitive Intelligence Summary</span>
                        </div>
                        <p className="text-xs text-[#e1e2ec] leading-relaxed">
                          {deals[selectedDeal].aiNotes}
                        </p>
                      </div>

                      {/* Voice & Meeting Assistant Demonstration */}
                      <div className="p-3.5 rounded-lg bg-[#1d1f27] border border-[#272a32] space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#c0c1ff] text-base">mic</span>
                            <span className="text-xs font-semibold text-white">
                              Synced Call: Technical Alignment (34 min)
                            </span>
                          </div>
                          <span className="text-[11px] text-[#849495] font-mono">Recorded 11:30 AM EST</span>
                        </div>

                        {!summaryGenerated ? (
                          <div>
                            <p className="text-xs text-[#b9cacb] mb-3">
                              Our neural pipeline transcribes sales meetings, extracts key constraints, and drafts personalized follow-up proposals automatically.
                            </p>
                            <button
                              onClick={() => {
                                setIsGeneratingSummary(true);
                                setTimeout(() => {
                                  setIsGeneratingSummary(false);
                                  setSummaryGenerated(true);
                                }, 800);
                              }}
                              disabled={isGeneratingSummary}
                              className="px-4 py-2 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-xs flex items-center gap-2 hover:bg-[#7df4ff] transition-all"
                            >
                              <span className="material-symbols-outlined text-sm">
                                {isGeneratingSummary ? 'autorenew' : 'auto_awesome'}
                              </span>
                              <span>
                                {isGeneratingSummary ? 'Synthesizing Audio & Deliverables...' : 'Generate AI Meeting Summary & Follow-Up'}
                              </span>
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3 animate-fadeIn">
                            <div className="p-3 rounded bg-[#10131a] border border-[#3b494b]/60 text-xs space-y-1.5">
                              <div className="font-semibold text-[#6ffbbe] flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                AI-Extracted Action Items:
                              </div>
                              <ul className="list-disc list-inside text-[#b9cacb] space-y-1 pl-1">
                                <li>Send SOC2 Type II compliance audit documents to Security Officer.</li>
                                <li>Deliver custom benchmark graph for multi-agent retrieval latency (&lt;120ms target).</li>
                                <li>Schedule follow-up engineering walk-through with lead architect next Tuesday.</li>
                              </ul>
                            </div>

                            <div className="p-3 rounded bg-[#10131a] border border-[#272a32] text-xs">
                              <div className="font-semibold text-white mb-1 flex items-center justify-between">
                                <span>Drafted Follow-Up Email (Ready to Send):</span>
                                <span className="text-[10px] text-[#00f0ff] font-mono">Tone: Authoritative / Senior</span>
                              </div>
                              <p className="text-[#b9cacb] italic text-[11px]">
                                &quot;Hi David, great speaking today. As discussed, our team has prepared the latency benchmarks for your Next.js and custom agent pipeline. Attached is our proposed 4-week rollout schedule...&quot;
                              </p>
                            </div>

                            <button
                              onClick={() => setSummaryGenerated(false)}
                              className="text-[11px] text-[#00f0ff] hover:underline"
                            >
                              Reset Demo
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTELLIGENT PROJECT MANAGEMENT */}
          {currentTab === 'pm' && (
            <div className="space-y-5">
              {/* Telemetry ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#006970]/30 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                    <span className="material-symbols-outlined text-lg">space_dashboard</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Predictive Sprint Management Console</h4>
                    <p className="text-xs text-[#b9cacb]">Machine-learning timeline forecasting &amp; automated resource balancing</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#272a32] text-xs font-mono text-[#6ffbbe]">
                    Sprint 42: Day 6 of 10
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#272a32] text-xs font-mono text-[#dbfcff]">
                    Confidence: 94.2%
                  </span>
                </div>
              </div>

              {/* Forecast & Bottleneck Alert Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#b9cacb] uppercase">Projected Delivery</span>
                    <div className="text-2xl font-bold text-[#6ffbbe] mt-1">2.4 Days Ahead</div>
                    <p className="text-xs text-[#b9cacb] mt-1">Estimated completion: Friday, 3:00 PM EST</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#272a32] flex items-center justify-between text-xs">
                    <span className="text-[#849495]">Historical Accuracy</span>
                    <span className="font-mono text-white">98.1% across 14 sprints</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#191b23] border border-[#ffb4ab]/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#ffb4ab] uppercase">Predicted Bottleneck</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#93000a]/50 text-[#ffdad6]">
                        High Impact
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">API Schema &amp; Auth Handshake</div>
                    <p className="text-xs text-[#b9cacb] mt-1">
                      {rebalanced
                        ? '✅ Pod load successfully rebalanced across Alex & Marcus. Bottleneck resolved.'
                        : '⚠️ Backend engineer Marcus Vance is at 98% capacity. Risk of 36-hr code review lag.'}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#272a32]">
                    <button
                      onClick={() => setRebalanced(!rebalanced)}
                      className={`w-full py-1.5 px-2 rounded text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                        rebalanced
                          ? 'bg-[#272a32] text-[#6ffbbe]'
                          : 'bg-[#00f0ff] text-[#00363a] hover:bg-[#7df4ff]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {rebalanced ? 'undo' : 'balance'}
                      </span>
                      <span>{rebalanced ? 'Reset Allocation' : 'Simulate AI Rebalance'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#b9cacb] uppercase">Sprint Velocity</span>
                    <div className="text-2xl font-bold text-white mt-1">48 / 52 Points</div>
                    <div className="w-full bg-[#10131a] rounded-full h-2 mt-2 overflow-hidden">
                      <div className="bg-[#00f0ff] h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#272a32] flex items-center justify-between text-xs text-[#b9cacb]">
                    <span>Burndown Variance</span>
                    <span className="font-mono text-[#6ffbbe]">-4.2% (Faster than planned)</span>
                  </div>
                </div>
              </div>

              {/* Workload Allocation Matrix */}
              <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32]">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-xs font-mono uppercase text-[#b9cacb]">
                    Engineer Pod Capacity Distribution
                  </h5>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={() => setSimulatedFilter('all')}
                      className={`px-2 py-1 rounded text-xs ${
                        simulatedFilter === 'all' ? 'bg-[#272a32] text-white' : 'text-[#849495]'
                      }`}
                    >
                      All Pods
                    </button>
                    <button
                      onClick={() => setSimulatedFilter('critical')}
                      className={`px-2 py-1 rounded text-xs ${
                        simulatedFilter === 'critical' ? 'bg-[#272a32] text-white' : 'text-[#849495]'
                      }`}
                    >
                      Critical Path
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">Marcus Vance (Lead Platform Architect)</span>
                      <span className="font-mono text-xs text-[#b9cacb]">
                        {rebalanced ? '74% Capacity (Nominal)' : '98% Capacity (Overload Risk)'}
                      </span>
                    </div>
                    <div className="w-full bg-[#10131a] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          rebalanced ? 'bg-[#6ffbbe] w-[74%]' : 'bg-[#ffb4ab] w-[98%]'
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">Elena Rostova (Full-Stack / Next.js)</span>
                      <span className="font-mono text-xs text-[#b9cacb]">
                        {rebalanced ? '82% Capacity' : '71% Capacity'}
                      </span>
                    </div>
                    <div className="w-full bg-[#10131a] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-[#00f0ff] transition-all duration-500"
                        style={{ width: rebalanced ? '82%' : '71%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">David Morales (AI Pipelines &amp; Agents)</span>
                      <span className="font-mono text-xs text-[#b9cacb]">68% Capacity (Available)</span>
                    </div>
                    <div className="w-full bg-[#10131a] h-2 rounded-full overflow-hidden">
                      <div className="h-2 rounded-full bg-[#c0c1ff] w-[68%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WEB & SAAS ARCHITECTURE CONFIGURATOR */}
          {currentTab === 'web-quote' && (
            <div className="space-y-5">
              {/* Telemetry ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                    <span className="material-symbols-outlined text-lg">devices</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Custom Web Architecture Scoping Engine</h4>
                    <p className="text-xs text-[#b9cacb]">Configure your stack, AI layer, and receive upfront ballpark engineering estimates</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#6ffbbe]">
                  <span>Zero Vendor Lock-In · 100% Code Ownership</span>
                </div>
              </div>

              {/* Configurator Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-2">
                      1. Application Architecture Category
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'saas', label: 'B2B SaaS Platform', desc: 'Auth, billing, multi-tenancy' },
                        { id: 'portal', label: 'Client / Customer Portal', desc: 'Secure data access, reporting' },
                        { id: 'internal', label: 'Internal Ops Suite', desc: 'Workflows, ERP, CRM tooling' },
                        { id: 'enterprise', label: 'High-Throughput Enterprise', desc: 'Complex microservices, SLA' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setAppType(item.id)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            appType === item.id
                              ? 'bg-[#1d1f27] border-[#00f0ff] text-white shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                              : 'bg-[#191b23] border-[#272a32] text-[#b9cacb] hover:border-[#3b494b]'
                          }`}
                        >
                          <div className="font-semibold text-xs text-white">{item.label}</div>
                          <div className="text-[11px] text-[#849495] mt-0.5">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-2">
                      2. Recommended Frontend &amp; Backend Stack
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-[#191b23] border border-[#272a32]">
                        <span className="text-[10px] text-[#849495] uppercase block font-mono">Frontend</span>
                        <div className="flex gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedFrontend('next')}
                            className={`px-2 py-1 rounded text-xs ${
                              selectedFrontend === 'next' ? 'bg-[#00f0ff] text-[#00363a] font-bold' : 'text-[#b9cacb]'
                            }`}
                          >
                            Next.js 15
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedFrontend('vite')}
                            className={`px-2 py-1 rounded text-xs ${
                              selectedFrontend === 'vite' ? 'bg-[#00f0ff] text-[#00363a] font-bold' : 'text-[#b9cacb]'
                            }`}
                          >
                            React 19 + Vite
                          </button>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#191b23] border border-[#272a32]">
                        <span className="text-[10px] text-[#849495] uppercase block font-mono">Cloud Backend</span>
                        <div className="flex gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedBackend('node')}
                            className={`px-2 py-1 rounded text-xs ${
                              selectedBackend === 'node' ? 'bg-[#00f0ff] text-[#00363a] font-bold' : 'text-[#b9cacb]'
                            }`}
                          >
                            Node / Express
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedBackend('fastapi')}
                            className={`px-2 py-1 rounded text-xs ${
                              selectedBackend === 'fastapi' ? 'bg-[#00f0ff] text-[#00363a] font-bold' : 'text-[#b9cacb]'
                            }`}
                          >
                            Python FastAPI
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-2">
                      3. Modern AI Augmentation Capabilities
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'agents', name: 'Autonomous Multi-Agent Workflows', desc: 'Self-executing task queues & background triage' },
                        { id: 'rag', name: 'Domain Knowledge RAG & Vector Embeddings', desc: 'Deep company doc search with high precision' },
                        { id: 'extractor', name: 'Automated Document & Invoice Extraction', desc: 'Turn unstructured PDF/emails into verified database records' },
                      ].map((feat) => {
                        const checked = aiFeatures.includes(feat.id);
                        return (
                          <div
                            key={feat.id}
                            onClick={() => toggleAiFeature(feat.id)}
                            className={`p-2.5 rounded-lg border cursor-pointer flex items-center justify-between ${
                              checked
                                ? 'bg-[#1d1f27] border-[#00f0ff]/50'
                                : 'bg-[#191b23] border-[#272a32] opacity-70'
                            }`}
                          >
                            <div>
                              <div className="text-xs font-medium text-white">{feat.name}</div>
                              <div className="text-[11px] text-[#849495]">{feat.desc}</div>
                            </div>
                            <span
                              className={`material-symbols-outlined text-lg ${
                                checked ? 'text-[#00f0ff]' : 'text-[#3b494b]'
                              }`}
                            >
                              {checked ? 'check_box' : 'check_box_outline_blank'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Scope & Ballpark Estimate Card */}
                <div className="p-5 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#272a32]">
                      <span className="text-xs font-mono uppercase text-[#00f0ff]">Instant Scoping Summary</span>
                      <span className="text-xs text-[#6ffbbe] font-mono">Bi-Weekly Sprints</span>
                    </div>

                    <div className="my-4 space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-[#b9cacb]">Estimated Delivery Window:</span>
                        <span className="font-mono font-bold text-white text-base">~{estimate.weeks} Weeks</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-[#b9cacb]">Ballpark Engineering Range:</span>
                        <span className="font-mono font-bold text-[#6ffbbe] text-lg">
                          ${estimate.price.toLocaleString()} – ${(estimate.price * 1.25).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-[#b9cacb]">Pod Composition:</span>
                        <span className="text-xs text-white">1 Principal Architect + 2 Senior Engineers</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#10131a] border border-[#272a32] text-xs text-[#b9cacb] space-y-1">
                      <div className="font-semibold text-white">Included in Every Pod:</div>
                      <p>✓ Pristine TypeScript codebase with comprehensive test suites</p>
                      <p>✓ CI/CD pipeline automation on AWS / Vercel with zero downtime</p>
                      <p>✓ Direct shared Slack channel with lead engineers</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#272a32]">
                    <button
                      onClick={handleExportToContact}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#7df4ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                    >
                      <span>Apply This Stack to My Project Inquiry</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-t border-[#272a32] bg-[#191b23] text-xs">
          <div className="flex items-center gap-2 text-[#b9cacb]">
            <span className="material-symbols-outlined text-[#6ffbbe] text-base">verified</span>
            <span>All solutions are bespoke, client-owned, and backed by production SLAs</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportToContact}
              className="text-[#00f0ff] font-semibold hover:underline"
            >
              Discuss Your Architecture With Us &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
