import { Day } from "@/data/plan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressState } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface DayCardProps {
  day: Day;
  progress: ProgressState;
  onToggleTask: (taskId: string) => void;
}

export function DayCard({ day, progress, onToggleTask }: DayCardProps) {
  const isAllTasksCompleted = day.tasks.every((task) => progress[task.id]);
  const completedCount = day.tasks.filter((task) => progress[task.id]).length;
  const totalCount = day.tasks.length;

  return (
    <Card
      className={cn(
        "transition-all duration-300 relative overflow-hidden group border-2 shadow-sm",
        isAllTasksCompleted
          ? "border-green-500/50 bg-green-50/30 dark:bg-green-950/20"
          : "border-transparent hover:border-border/80"
      )}
    >
      {/* Subtle background glow effect on complete */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-500",
          isAllTasksCompleted && "opacity-100"
        )} 
      />

      <CardHeader className="pb-3 border-b flex flex-row items-center justify-between space-y-0 relative z-10">
        <div className="flex items-center space-x-2">
          <Badge 
            variant={isAllTasksCompleted ? "default" : "secondary"}
            className={cn(
              "font-bold text-sm",
              isAllTasksCompleted ? "bg-green-600 hover:bg-green-700" : ""
            )}
          >
            Gün {day.dayNumber}
          </Badge>
          {isAllTasksCompleted && (
            <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in duration-300" />
          )}
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {completedCount}/{totalCount}
        </span>
      </CardHeader>
      
      <CardContent className="pt-4 pb-5 space-y-4 relative z-10">
        {day.tasks.map((task) => {
          const isCompleted = !!progress[task.id];
          return (
            <div
              key={task.id}
              className="flex items-start space-x-3 group/task custom-checkbox-wrapper"
            >
              <Checkbox
                id={task.id}
                checked={isCompleted}
                onCheckedChange={() => onToggleTask(task.id)}
                className={cn(
                  "mt-1 transition-colors data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500",
                )}
              />
              <label
                htmlFor={task.id}
                className={cn(
                  "text-sm font-medium leading-tight cursor-pointer select-none transition-all duration-300",
                  isCompleted
                    ? "text-muted-foreground line-through opacity-70"
                    : "text-foreground group-hover/task:text-primary"
                )}
              >
                {task.title}
              </label>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
