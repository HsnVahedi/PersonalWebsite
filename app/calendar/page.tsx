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
        <div className="relative w-full h-screen">
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
                        
        </div>
    )
}

export default function CalendarPage() {
    return (
        <div className="w-full h-full">
            <Calendly />
        </div>
        // <CalendlyEmbed url="https://calendly.com/hossein-vahedi/30min" />
    )
}
