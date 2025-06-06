import ProfilePic from "../UserInfo/ProfilePic";
import TextareaAutosize from 'react-textarea-autosize';
import { FaRegImage } from "react-icons/fa";
import { MdOutlineGif } from "react-icons/md";
import UploadTweetButton from "../ButtonComponent/UploadTweetButton";
import { useCurrentUser } from "../../context/currentUser/CurrentUserProvider";
import { useEffect, useState } from "react";
import type { NewPost } from "../../types/NewPost";
import { usePostCache } from "../../context/cache/PostCacheProvider";
import type { Post } from "../../types/Post";
import PostTemplate from "../Tweet/PostTemplate";
import ReplyTemplate from "../Tweet/ReplyTemplate";

type ComposePostProps = {
    parentId?: number;
}

function ComposePost ({parentId}: ComposePostProps) {

    const [textInput, setTextInput] = useState<string>("");
    const {currentUser} = useCurrentUser();
    const placeHolder: string = parentId ? "Post your reply" : "What's up!?"

    useEffect(() => {
        console.log("isPostChild " + parentId != null)
    }, [parentId])

    if (parentId) {
        return (
            <div className="w-full h-fit flex flex-col gap-4 rounded-2xl px-4 py-3 bg-[var(--background-main)] border border-(--color-main)">
                
                <ReplyTemplate postId={parentId}/>

                <div className="w-full h-fit flex">
                    <div className="flex w-fit h-full flex-col mr-2">
                        <div className="w-10 h-10 mr-2">
                            <ProfilePic user={currentUser}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-fit">
                        <div className="w-full h-fit flex mb-1">
                            <TextareaAutosize value={textInput} onChange={(e) => setTextInput(e.target.value)} className="w-full min-h-16 p-1 text-white placeholder:text-(--twitter-text)"
                            placeholder={placeHolder}
                            />
                        </div>
                        <div className="flex w-full h-10 items-center">
                            <div className="flex gap-2 items-center text-(--color-main) h-full w-full">
                                <FaRegImage />
                                <MdOutlineGif className="text-4xl"/>
                            </div>
                            <div className="w-full h-full justify-end flex items-center">
                                <UploadTweetButton textInput = {textInput} parentId={parentId}/>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    } else {
        return (

            <div className="w-full h-fit flex rounded-2xl px-4 py-3 bg-[var(--background-main)] border border-(--color-main)">
                
                <div className="w-10 h-10 mr-1">
                    <ProfilePic user={currentUser}/>
                </div>
                <div className="flex flex-col w-full h-fit">
                    <div className="w-full h-fit flex mb-1">
                        <TextareaAutosize value={textInput} onChange={(e) => setTextInput(e.target.value)} className="w-full min-h-16 p-1 text-white placeholder:text-(--twitter-text)"
                        placeholder={placeHolder}
                        />
                    </div>
                    <div className="flex w-full h-10 items-center">
                        <div className="flex gap-2 items-center text-(--color-main) h-full w-full">
                            <FaRegImage />
                            <MdOutlineGif className="text-4xl"/>
                        </div>
                        <div className="w-full h-full justify-end flex items-center">
                            <UploadTweetButton textInput = {textInput}/>
                        </div>
                    </div>
                </div>
    
            </div>
    
        )
    }

}

export default ComposePost;