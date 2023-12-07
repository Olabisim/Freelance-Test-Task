

export default function P ({text, className}: {text: string, className?: string}) {
    return (
        <p className={`pt-5 pb-8 text-[#CACACE] text-sm font-thin ${className}`}>
            {text}
        </p>
    )
}