import { useState, useEffect } from 'react';
import { planData } from '@/data/plan';

export interface ProgressState {
  [taskId: string]: boolean;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('yks-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress from local storage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever progress changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('yks-progress', JSON.stringify(progress));
  }, [progress, isLoaded]);

  const toggleTask = (taskId: string) => {
    setProgress(prev => {
      const newState = { ...prev };
      if (newState[taskId]) {
        delete newState[taskId];
      } else {
        newState[taskId] = true;
      }
      return newState;
    });
  };

  const getCompletedTaskCount = () => {
    return Object.keys(progress).length;
  };

  const getTotalTaskCount = () => {
    let total = 0;
    planData.forEach(phase => {
      phase.days.forEach(day => {
        total += day.tasks.length;
      });
    });
    return total;
  };

  const getDayProgress = (dayTasks: {id: string}[]) => {
    if (dayTasks.length === 0) return 0;
    const completed = dayTasks.filter(t => progress[t.id]).length;
    return completed / dayTasks.length;
  };

  return {
    progress,
    toggleTask,
    getCompletedTaskCount,
    getTotalTaskCount,
    getDayProgress,
    isLoaded
  };
}
