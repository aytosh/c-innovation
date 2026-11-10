import { LiquidButton } from "@/components/ui/liquid-glass-button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="pointer-events-none absolute inset-0">
            <svg
                className="h-full w-full text-[#5b3fd4] dark:text-[#ddd6fe]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.02}
                        pathLength={1}
                        strokeDasharray="1"
                        className="hero-path"
                        style={{ animationDuration: `${22 + path.id * 0.45}s` }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    eyebrow = "CInnovation",
    description,
    primaryLabel = "Discover Excellence",
    primaryHref = "#contact",
    secondaryLabel,
    secondaryHref = "#solutions",
}: {
    title?: string;
    eyebrow?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}) {
    const words = title.split(" ");

    return (
        <div
            id="top"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#07060c]"
        >
            <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-18%] h-[58%] [perspective:900px]">
                <div className="h-full origin-bottom opacity-50 [transform:rotateX(68deg)] [background-image:linear-gradient(rgba(196,181,253,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>
            <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-[#c4b5fd]/40 to-transparent opacity-0" />
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
            <div className="relative z-10 container mx-auto px-4 pt-24 text-center md:px-6">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.32em] text-[#c4b5fd]">
                        {eyebrow}
                    </p>
                    <h1 className="mb-8 font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-6xl md:text-7xl">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                                {word.split("").map((letter, letterIndex) => (
                                    <span
                                        key={`${wordIndex}-${letterIndex}`}
                                        className="hero-letter inline-block text-[#f4f1ff]"
                                        style={{
                                            animationDelay: `${0.15 + wordIndex * 0.12 + letterIndex * 0.035}s`,
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {description ? (
                        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            {description}
                        </p>
                    ) : null}

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <LiquidButton href={primaryHref} size="xl">
                            {primaryLabel}
                        </LiquidButton>
                        {secondaryLabel ? (
                            <LiquidButton href={secondaryHref} size="xl" variant="ghost">
                                {secondaryLabel}
                            </LiquidButton>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
