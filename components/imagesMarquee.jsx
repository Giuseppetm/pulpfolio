import { movies } from "@/utils/data";

const ImagesMarquee = () => {
    return (
        <div className={"images-marquee"}>
            {movies.map((m,i) => {
                return (
                    <div className={"movie"} key={i}>
                        <img 
                            src={`/images/movies/${m.imgSrc}`} 
                            alt={m.imgSrc}   
                            className="w-full" 
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImagesMarquee;