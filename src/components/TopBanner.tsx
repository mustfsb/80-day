import { Zap } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function TopBanner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-100 px-4 py-3 shadow-sm flex items-center justify-between font-medium border-b border-amber-200 dark:border-amber-900/50 backdrop-blur-md">
      <div className="flex-1"></div>
      <div className="flex items-center justify-center flex-[2] text-sm md:text-base text-center">
        <Zap className="w-5 h-5 md:mr-2 text-amber-600 dark:text-amber-500 fill-amber-500 animate-pulse flex-shrink-0" />
        <span className="hidden md:inline">
          ⚡ <strong className="font-bold">Değişmez Kural:</strong> Her sabah 20 Paragraf + 15 TYT Problemi çözülecek.
        </span>
        <span className="md:hidden">
          ⚡ 20 Paragraf + 15 TYT Problemi
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
