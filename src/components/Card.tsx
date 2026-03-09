import { useDispatch , useSelector} from "react-redux";
import { RootState, AppDispatch} from "../store/store";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import { Star } from "lucide-react";

type Props = {
    id: string,
    title: string,
    description?: string,
    image?: string,
    type?: string
    url?:string
}

export default function Card({id, title, description, image,url,  type}: Props) {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const isFavorite = favorites.some((item: any) => item.id === id);

    const handleFavorite = () => {

        if(isFavorite){
            dispatch( removeFavorite(id));
        }else{
            dispatch( addFavorite({
                id, title, description, image, url, type
            }));
        }
    }
    return (
        <div className="relative w-full max-w-xl h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

            <div className="absolute top-4 right-4 z-10">
                <Star onClick={handleFavorite} className={`w-6 h-6 cursor-pointer transition-colors ${isFavorite ? "fill-purple-600 text-purple-600" : "text-white"}  `}/>
            </div>

           
           
            <div className="absolute bottom-4 left-6 right-6 text-white">
            
                <h2 className="text-xl font-bold leading-tight line-clamp-1">
                    {title}
                </h2>
            
                <p className="text-sm text-gray-300 mt-1 line-clamp-2 opacity-90">
                    {description}
                </p>
            
                <div className="flex justify-between items-center mt-3">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 cursor-pointer text-sm font-medium transition-colors">
                        {type=== "movies" ? "Play Now" : "Read More"}
                    </a>

                  {/*  <button className="text-gray-400 hover:text-blue-300 text-sm font-medium transition-colors">
                        Read More
                    </button> */}

                    {type && (
                        <span className="bg-white/10 border border-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full">
                            {type}
                        </span>
                    )}
            </div>         
        </div>            
     </div>
    )
}

