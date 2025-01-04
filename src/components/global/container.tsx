export function Container({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) {
    return (
        <div id={id} className={`container mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}