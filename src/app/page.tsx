"use client";

import { useState } from "react";
import { planData } from "@/data/plan";
import { useProgress } from "@/hooks/useProgress";
import { TopBanner } from "@/components/TopBanner";
import { DayCard } from "@/components/DayCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const { progress, toggleTask, getCompletedTaskCount, getTotalTaskCount, isLoaded } = useProgress();
  const [activeTab, setActiveTab] = useState(planData[0].id.toString());

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground font-medium">Plan yükleniyor...</p>
        </div>
      </div>
    );
  }

  const completed = getCompletedTaskCount();
  const total = getTotalTaskCount();
  const progressPercent = Math.round((completed / total) * 100) || 0;

  return (
    <div className="min-h-screen bg-background dark:bg-background pb-20">
      <TopBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              YKS Taarruz Planı
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              80 günlük stratejik hazırlık kampı. İstikrarlı ol, hedeflerinden şaşma ve ilerlemeni buradan takip et. Başarı tesadüf değildir.
            </p>
          </div>

          {/* Global Progress Widget */}
          <div className="w-full md:w-80 bg-card text-card-foreground p-4 rounded-xl border-2 shadow-sm">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-semibold flex items-center gap-1.5 text-muted-foreground">
                <Target className="w-4 h-4 text-blue-500" /> Genel İlerleme
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                %{progressPercent}
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
            <div className="mt-2 text-xs text-right font-medium text-muted-foreground">
              {completed} / {total} Görev Tamamlandı
            </div>
          </div>
        </section>

        {/* Phase Navigation Tabs */}
        <section>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <TabsList className="h-12 w-full justify-start md:justify-center p-1 bg-muted/50 border rounded-lg min-w-max">
                {planData.map((phase) => {
                  // Calculate phase specific progress
                  let phaseTotal = 0;
                  let phaseCompleted = 0;
                  phase.days.forEach(day => {
                    phaseTotal += day.tasks.length;
                    day.tasks.forEach(task => {
                      if (progress[task.id]) phaseCompleted++;
                    });
                  });
                  const phaseProgress = phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0;

                  return (
                    <TabsTrigger
                      key={phase.id}
                      value={phase.id.toString()}
                      className="px-6 py-2.5 rounded-md font-semibold text-sm transition-all data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm gap-2"
                    >
                      <span className="hidden sm:inline">{phase.name}</span>
                      <span className="sm:hidden">{phase.id}. Aşama</span>
                      {phaseProgress === 100 ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 flex items-center justify-center ml-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <span className="text-xs px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground ml-1 font-medium">
                          %{phaseProgress}
                        </span>
                      )}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Day Cards Grid */}
            {planData.map((phase) => (
              <TabsContent 
                key={phase.id} 
                value={phase.id.toString()}
                className="focus-visible:outline-none focus-visible:ring-0 mt-6"
              >
                <div className="flex items-center gap-2 mb-6 text-xl font-bold text-slate-800 dark:text-slate-200">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  {phase.name}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {phase.days.map((day) => (
                    <DayCard
                      key={day.dayNumber}
                      day={day}
                      progress={progress}
                      onToggleTask={toggleTask}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

      </main>
    </div>
  );
}

// Ensure lucide icon is imported for the green check
import { CheckCircle2 } from "lucide-react";
