"user client";

import { PropsToast } from "@/types/PropsToast";

export default function Toast({ message, type = 'success' }: PropsToast) {
    return (
        <div
            className={`
                fixed top-5 right-5 px-4 py-2 rounded text-white
                ${type === "success" ? "bg-green-600" : "bg-red-600"}    
            `}
        >
            {message}
        </div>
    );
}