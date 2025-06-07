import { useParams } from "react-router-dom";
import PostTemplate from "../Tweet/PostTemplate";

function TweetPreview () {

    const {ID} = useParams();

    return (
        <div className="h-full w-full">

            {ID && (      
            <div>
                <PostTemplate postId={parseInt(ID)}/>
            </div>
            )}    

        </div>
    )

}

export default TweetPreview;