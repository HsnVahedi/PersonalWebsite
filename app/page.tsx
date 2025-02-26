'use client'

import { useEffect, useState } from 'react'
// import CalendlyEmbed from '@/components/Calendar/Calendly'

const Calendly = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script')
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        
        let timeoutId: NodeJS.Timeout
        
        script.onload = () => {
            // Add 5 second delay before hiding loading spinner
            timeoutId = setTimeout(() => {
                setIsLoading(false)
            }, 5000)
        }
        
        document.body.appendChild(script)

        return () => {
            // Cleanup script and timeout when component unmounts
            document.body.removeChild(script)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/hossein-vahedi/30min" 
                style={{ minWidth: "320px" }}
            />
                 
        </>             
    )
}

export default function CalendarPage() {
    return (
        <div className="w-full h-full">
            
            <div className="relative w-full h-[1000px]">
                <Calendly />
                <a 
                    href="https://www.linkedin.com/in/hossein-vahedi-a9b19774/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-fit mx-auto my-4 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors duration-200"

                    
                        // className="flex items-center justify-center gap-2 w-full max-w-screen-lg mx-auto my-8 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors duration-200"
                    >
                        <svg 
                            className="w-6 h-6 fill-current" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        Connect on LinkedIn
                </a>
            </div>
        </div>
        // <CalendlyEmbed url="https://calendly.com/hossein-vahedi/30min" />
    )
}
