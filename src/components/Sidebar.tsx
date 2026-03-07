export default function Sidebar(){
    return(
        <div className="w-64 h-screen bg-gray-200 p-4">
            <ul className="space-y-4">
                <li className="font-semibold">Feed</li>
                <li>Trending</li>
                <li>Favorites</li>
                <li>Settings</li>
            </ul>
        </div>
    );
}