export default function Navbar(){
    return(
        <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
            <h1 className="text-lg font-bold">My Dashboard</h1>
            
            <input 
                className="border px-3 py-1 rounded"
                placeholder="Search..."
            />
        </div>            
    );
}