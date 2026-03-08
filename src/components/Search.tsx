"use client";

type Props ={
    value: string;
    onChange: (value : string) => void;
};

export default function Search({value , onChange} : Props) {
    return (
        <div className="mb-6">
            <input type="text" placeholder="Search content..."
                value={value}
                onChange={(e)=> onChange(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg"
        />
        </div>
    )
}