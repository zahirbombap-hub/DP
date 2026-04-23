// BHQZ Bosa - Split Section Component
// Two-column layout with independent content on each side
// Responsive: stacks vertically on mobile

export default function SplitSection({
  leftContent,
  rightContent,
  leftClassName = "",
  rightClassName = "",
  gapSize = "gap-0",
  alignItems = "items-stretch",
  containerClassName = "",
}) {
  return (
    <section
      className={`split-section relative w-screen overflow-hidden bg-black py-0 ${containerClassName}`}
      style={{
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
      }}
    >
      <div className="w-full">
        <div
          className={`grid min-h-[26rem] grid-cols-1 ${gapSize} ${alignItems} md:min-h-[30rem] md:grid-cols-[55fr_45fr]`}
        >
          {/* Left Content */}
          <div className={`split-left relative min-h-[260px] w-full break-words overflow-hidden md:min-h-[480px] ${leftClassName}`}>
            {leftContent}
          </div>

          {/* Right Content */}
          <div className={`split-right relative flex w-full break-words items-center bg-[rgba(20,0,0,0.75)] p-8 text-white md:min-h-[480px] md:p-10 lg:p-12 ${rightClassName}`}>
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
}
