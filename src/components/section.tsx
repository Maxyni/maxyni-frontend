type SectionProps = {
    id?: string
    className?: string
    children: React.ReactNode
}

export default async function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={`container mx-auto px-4 ${className}`}
        >
            {children}
        </section>
    )
}