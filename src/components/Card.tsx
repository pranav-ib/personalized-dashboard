type Props = {
    title: string,
    description?: string,
    image?: string
}


export default function Card({title, description, image}: Props) {
    return (
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">

            <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-3" />

            <h2 className="font-bold text-lg mb-2">{title}</h2>

             <p className="text-sm text-gray-600">{description}</p>

              <button className="mt-3 text-blue-600 text-sm">
                Read More
            </button>
            
        </div>
    )
}