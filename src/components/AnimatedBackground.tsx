
export const AnimatedBackground = () => {
    return (
      <div className="flex flex-row justify-left">
        <div className="animate-background absolute top-full hidden sm:block" style={{ top: "64%", left: "20%", animationDelay: "0.5s", animationDuration: "21s" }}>
          <div className="h-50 w-50 rounded-full bg-zinc-800"></div>
        </div>
        <div className="animate-background absolute top-full hidden sm:block" style={{ left: "30%", animationDelay: "0.5s", animationDuration: "21s" }}>
          <div className="h-50 w-50 rounded-full bg-zinc-800"></div>
        </div>
        <div className="animate-background absolute top-full hidden sm:block" style={{ left: "40%", animationDelay: "0.5s", animationDuration: "21s" }}>
          <div className="h-50 w-50 rounded-full bg-zinc-800"></div>
        </div>
        <div className="animate-background absolute top-full hidden sm:block" style={{ left: "50%", animationDelay: "0.5s", animationDuration: "21s" }}>
          <div className="h-50 w-50 rounded-full bg-zinc-800"></div>
        </div>
      </div>
    );
};