import React, { useState } from 'react';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedCallType, setSelectedCallType] = useState('30min');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const timeSlots = ['10:00 AM EST', '11:30 AM EST', '2:00 PM EST', '3:30 PM EST', '5:00 PM EST'];
  const dates = ['Tomorrow (Oct 14)', 'Thursday (Oct 15)', 'Friday (Oct 16)', 'Next Monday (Oct 19)'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#10131a] border border-[#3b494b]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-[#e1e2ec]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#272a32] bg-[#191b23]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <div>
              <h3 className="text-base font-semibold text-white">Schedule Technical Architecture Call</h3>
              <p className="text-xs text-[#b9cacb]">Direct consultation with a Principal Software Engineer</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#b9cacb] hover:text-white hover:bg-[#272a32] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isBooked ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#006970]/30 border border-[#00f0ff] flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="text-xl font-bold text-white">Consultation Confirmed</h4>
              <p className="text-sm text-[#b9cacb] max-w-md mx-auto">
                Thank you, <strong className="text-white">{name || 'there'}</strong>. We have reserved{' '}
                <strong className="text-[#00f0ff]">{selectedDate} at {selectedTime}</strong>. A calendar invite with Google Meet / Zoom link and preparation notes has been dispatched to{' '}
                <strong className="text-white">{email}</strong>.
              </p>
              <div className="p-3 rounded-lg bg-[#191b23] border border-[#272a32] text-xs text-[#b9cacb] max-w-sm mx-auto">
                Lead Architect: <strong>Dr. Marcus Vance (VP of Engineering)</strong>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsBooked(false);
                    onClose();
                  }}
                  className="px-6 py-2 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-xs hover:bg-[#7df4ff] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Call Type Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1.5">
                  Meeting Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCallType('30min')}
                    className={`p-2.5 rounded-lg text-left border text-xs transition-all ${
                      selectedCallType === '30min'
                        ? 'bg-[#1d1f27] border-[#00f0ff] text-white'
                        : 'bg-[#191b23] border-[#272a32] text-[#b9cacb]'
                    }`}
                  >
                    <div className="font-semibold text-white">30-Min Architecture Deep Dive</div>
                    <div className="text-[11px] text-[#849495]">Tech stack, scalability &amp; budget scoping</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCallType('demo')}
                    className={`p-2.5 rounded-lg text-left border text-xs transition-all ${
                      selectedCallType === 'demo'
                        ? 'bg-[#1d1f27] border-[#00f0ff] text-white'
                        : 'bg-[#191b23] border-[#272a32] text-[#b9cacb]'
                    }`}
                  >
                    <div className="font-semibold text-white">15-Min Live Screen Walkthrough</div>
                    <div className="text-[11px] text-[#849495]">Live demo of custom CRM or PM software</div>
                  </button>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#00f0ff]"
                  >
                    {dates.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                    Select Time Window
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#00f0ff]"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Technologies"
                  className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#b9cacb] mb-1">
                  What would you like to discuss?
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe what you are building or key system bottlenecks..."
                  className="w-full bg-[#191b23] border border-[#272a32] rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#7df4ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                >
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>Confirm Scheduled Architecture Call</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
