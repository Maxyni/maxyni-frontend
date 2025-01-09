export function Container({ id, className, children }: { id?: string, className?: string, children: React.ReactNode }) {
    return (
        <div id={id} className={`container mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}