'use client'

import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export const Calendly = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script')
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        
        let timeoutId: NodeJS.Timeout
        
        script.onload = () => {
            // Add delay before hiding loading spinner
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

export default function CalendarModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay/backdrop */}
            <div 
                className="fixed inset-0 bg-black bg-opacity-70" 
                onClick={onClose}
            />
            
            {/* Modal content */}
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-5xl h-[80vh] rounded-lg shadow-xl z-10 flex flex-col">
                {/* Modal header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Book a Meeting</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Modal body */}
                <div className="relative flex-grow p-1">
                    <Calendly />
                </div>
                
                {/* Modal footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
} 