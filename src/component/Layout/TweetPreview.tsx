import { useParams } from "react-router-dom";
import PostTemplate from "../Tweet/PostTemplate";
import { useCurrentUser } from "../../context/currentUser/CurrentUserProvider";
import ProfilePic from "../UserInfo/ProfilePic";
import InputFormField from "../InputComponent/InputFormField";
import { useState } from "react";

function TweetPreview () {

    const {ID} = useParams();
    const {currentUser} = useCurrentUser();

    const [newTweetInput, setNewTweetInput] = useState("");

    return (
        <div className="h-full w-full flex flex-col">

            {ID && (      
            <div>
                <PostTemplate postId={parseInt(ID)}/>
            </div>
            )}

            {currentUser && (
            <div className="w-full h-20 flex">

                <div className="w-10 h-10 mr-2">
                    <div>
                        <ProfilePic user={currentUser}/>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <InputFormField placeholderValue="add your reply" inputValue={newTweetInput} setInputValue={setNewTweetInput}/>
                </div>    

            </div>
            )}


        </div>
    )

}

export default TweetPreview;