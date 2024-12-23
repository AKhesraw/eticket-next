export default function BlurOverlay({ children, className }) {
  return <div className="relative m-[1px]">
    {children}
    <div className="absolute inset-0 flex items-center justify-center z-10 w-full">
      <div className={`bg-background/30 backdrop-blur-md rounded-lg p-8 text-center w-full h-[99.5%] ${className}`}>
        <h2 className="text-3xl font-bold text-primary mb-4">Coming Soon</h2>
        <p className="text-foreground/60">We're working hard to bring you this feature. Stay tuned!</p>
      </div>
    </div>
  </div>
}