import { movies } from "@/utils/data";
import Image from "next/image";

const ImagesMarquee = () => {
    return (
        <div className={"images-marquee"}>
            {movies.map((m,i) => {
                return (
                    <div className={"movie"} key={i}>
                        <Image 
                            src={`/images/movies/${m.imgSrc}`} 
                            alt={m.imgSrc}    
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full" 
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImagesMarquee;