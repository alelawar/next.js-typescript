export const Card = ({children}: {children: React.ReactNode}) => {
    
    return (
        <div className="text-white shadow-md rounded-lg p-6 mb-4">
             {children}
        </div>
    );
}