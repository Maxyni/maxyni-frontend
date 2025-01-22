export function Section({ id, className, children }: { id?: string, className?: string, children: React.ReactNode }) {
    return (
        <section id={id} className={`container mx-auto px-4 ${className}`}>
            {children}
        </section>
    )
}