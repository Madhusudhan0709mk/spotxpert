'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Phone, PhoneOff, Check, Sparkles, Volume2, Play, Square } from 'lucide-react';
import { DemoAgent } from '@/lib/industries-data';

interface IndustryLiveAgentSimulatorProps {
  demoAgents: DemoAgent[];
}

export default function IndustryLiveAgentSimulator({
  demoAgents,
}: IndustryLiveAgentSimulatorProps) {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(demoAgents[0]?.id || '');
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [activeTurnIndex, setActiveTurnIndex] = useState<number>(0);
  const [callDuration, setCallDuration] = useState<number>(0);

  const currentAgent = demoAgents.find(a => a.id === selectedAgentId) || demoAgents[0];

  // Call timer and dialogue progression
  useEffect(() => {
    if (!isCalling) return;
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCalling]);

  // Advance speech dialogue turns when call is active
  useEffect(() => {
    let turnTimeout: any;
    if (isCalling && currentAgent) {
      if (activeTurnIndex < currentAgent.transcript.length - 1) {
        turnTimeout = setTimeout(() => {
          setActiveTurnIndex(prev => prev + 1);
        }, 2800);
      }
    }
    return () => clearTimeout(turnTimeout);
  }, [isCalling, activeTurnIndex, currentAgent]);

  const handleStartCall = () => {
    setIsCalling(true);
    setActiveTurnIndex(0);
    setCallDuration(0);

    // Speak first turn using Web Speech API if supported
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && currentAgent?.transcript[0]) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(currentAgent.transcript[0].text);
        utter.rate = 1.05;
        utter.pitch = 1.0;
        window.speechSynthesis.speak(utter);
      } catch (e) {
        // fallback smoothly
      }
    }
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setActiveTurnIndex(currentAgent?.transcript.length || 0);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleSelectAgent = (agentId: string) => {
    if (isCalling) {
      handleEndCall();
    }
    setSelectedAgentId(agentId);
    setActiveTurnIndex(0);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Frame 18s / 21s */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="section-heading text-[#0E4032]">
            Experience a voice agent, live.
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-3">
            Sales, collections, support, bookings. Pick one and have the conversation yourself.
          </p>
        </div>

        {/* 3-Column Testbed Grid matching Frame 18s - 24s */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Choose an agent */}
          <div className="lg:col-span-4 bg-white border border-[#B4D9C4] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider mb-4">
                Choose an agent
              </div>

              <div className="space-y-2.5">
                {demoAgents.map((agent) => {
                  const isSelected = agent.id === currentAgent.id;
                  return (
                    <button
                      key={agent.id}
                      onClick={() => handleSelectAgent(agent.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#B4D9C4]/35 border-[#33A685] ring-1 ring-[#33A685]'
                          : 'bg-[#F2F2F2]/60 border-[#B4D9C4]/70 hover:bg-[#B4D9C4]/20'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-[#0E4032] flex items-center gap-1.5">
                          <span>{agent.name}</span>
                        </div>
                        <div className="text-xs text-[#0E4032]/75 mt-0.5">
                          {agent.role} &bull; <span className="text-[#33A685] font-semibold">{agent.tag}</span>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'bg-[#33A685] border-[#33A685] text-white'
                            : 'border-[#B4D9C4] bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#B4D9C4]/60 text-[11px] text-[#0E4032]/70 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
              <span>Grounded in active business rules and system context</span>
            </div>
          </div>

          {/* Column 2: Live Call Dialer Card */}
          <div className="lg:col-span-4 bg-[#0E4032] border border-[#1b6550] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col items-center justify-between text-center relative overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#185c49]/60 via-transparent to-transparent pointer-events-none" />

            <div className="w-full">
              <div className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1">
                Voice Agent Active Test
              </div>
              <h3 className="card-heading text-white truncate px-2">
                {currentAgent.name}
              </h3>
              <p className="text-xs text-[#B4D9C4]/80 mt-1 max-w-xs mx-auto line-clamp-1">
                {currentAgent.scenario}
              </p>
            </div>

            {/* Circular Pulsating Call Button matching Frame 21s / 24s */}
            <div className="my-8 relative flex items-center justify-center">
              {isCalling && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0.1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="absolute w-36 h-36 rounded-full bg-[#33A685]/30 pointer-events-none"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                    className="absolute w-28 h-28 rounded-full bg-[#B4D9C4]/30 pointer-events-none"
                  />
                </>
              )}

              <button
                onClick={isCalling ? handleEndCall : handleStartCall}
                className={`relative z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center font-bold text-sm shadow-2xl transition-all duration-300 cursor-pointer ${
                  isCalling
                    ? 'bg-[#ff5e57] hover:bg-[#e04842] text-white'
                    : 'bg-[#33A685] hover:bg-[#299576] active:scale-95 text-white ring-4 ring-[#B4D9C4]/30'
                }`}
              >
                {isCalling ? (
                  <>
                    <PhoneOff className="w-6 h-6 mb-1" />
                    <span className="text-[11px] font-semibold uppercase">End Call</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-6 h-6 mb-1 text-white" />
                    <span className="text-[12px] font-bold leading-tight">Start<br />Speaking</span>
                  </>
                )}
              </button>
            </div>

            {/* Call State Feedback */}
            <div className="w-full">
              {isCalling ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08241c] border border-[#33A685] text-xs font-mono text-[#F2E6A7]">
                  <span className="w-2 h-2 rounded-full bg-[#33A685] animate-ping" />
                  <span>Call Active &bull; {formatTimer(callDuration)}</span>
                </div>
              ) : (
                <div className="text-xs text-[#B4D9C4] font-medium">
                  Press Start Speaking to call
                </div>
              )}
            </div>

          </div>

          {/* Column 3: Illustrative Transcript matching Frame 18s / 21s / 24s */}
          <div className="lg:col-span-4 bg-white border border-[#B4D9C4] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#B4D9C4]/60 mb-4">
                <span className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider">
                  Illustrative transcript
                </span>
                <span className="text-[11px] font-mono text-[#33A685] flex items-center gap-1 font-semibold">
                  <Volume2 className="w-3.5 h-3.5" />
                  Live Audio Sync
                </span>
              </div>

              {/* Chat Dialogue Bubbles */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {currentAgent.transcript.map((line, idx) => {
                  const isVisible = !isCalling || idx <= activeTurnIndex;
                  if (!isVisible) return null;

                  const isAgent = line.speaker === 'agent';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                    >
                      <div className="text-[10px] text-[#0E4032]/60 font-semibold mb-1 px-1">
                        {isAgent ? 'Voice Agent' : 'Caller'} &bull; {line.time}
                      </div>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                          isAgent
                            ? 'bg-[#B4D9C4]/35 text-[#0E4032] border border-[#B4D9C4] rounded-tl-xs'
                            : 'bg-[#F2E6A7]/40 text-[#0E4032] border border-[#F2E6A7] rounded-tr-xs font-medium'
                        }`}
                      >
                        {line.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#B4D9C4]/60 flex items-center justify-between text-xs text-[#0E4032]/75">
              <span>Low-latency speech synthesizer</span>
              <span className="font-mono text-[#33A685] font-semibold">&lt;280ms TTFT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
