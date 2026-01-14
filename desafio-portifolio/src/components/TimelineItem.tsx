interface TimelineItemProps {
  year: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ year, description, isLast }: TimelineItemProps) {
  return (
    <div className="flex-1 min-w-[250px]">
      <div className="relative">
        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4 shadow-lg shadow-purple-500/30">
          <span className="text-white text-sm font-medium">
            {year}
          </span>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}