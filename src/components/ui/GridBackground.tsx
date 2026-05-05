/**
 * Subtle grid/dot background — drop inside any `relative overflow-hidden` section.
 * Adjust `opacity` and `size` per section to vary intensity without changing the vibe.
 */
export function GridBackground({
    opacity = 0.03,
    size = 60,
}: {
    opacity?: number;
    size?: number;
}) {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none z-0"
            style={{
                opacity,
                backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                backgroundSize: `${size}px ${size}px`,
            }}
        />
    );
}
