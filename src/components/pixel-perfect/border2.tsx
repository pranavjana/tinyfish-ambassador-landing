const Border2 = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative w-full h-full">
    {/* Corner marks */}
    <span className="absolute top-0 left-0 block size-4 border-t border-l border-muted-foreground/30 z-30" />
    <span className="absolute top-0 right-0 block size-4 border-t border-r border-muted-foreground/30 z-30" />
    <span className="absolute bottom-0 left-0 block size-4 border-b border-l border-muted-foreground/30 z-30" />
    <span className="absolute bottom-0 right-0 block size-4 border-b border-r border-muted-foreground/30 z-30" />
    {children}
  </div>
);

export default Border2;
