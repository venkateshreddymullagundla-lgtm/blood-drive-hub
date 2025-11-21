import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover smooth-transition border border-border">
      <div className="flex items-center space-x-4">
        <div className="bg-primary/10 rounded-full p-3">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
