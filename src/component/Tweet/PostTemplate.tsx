import { useEffect, useState } from "react";
import type { Post } from "../../types/Post";
import type { User } from "../../types/User";
import { useCurrentUser } from "../../context/currentUser/CurrentUserProvider";
import { usePostCache } from "../../context/cache/PostCacheProvider";
import UsernameComponent from "../UserInfo/UsernameComponent";
import PostInteractionComponent from "./PostInteractionComponent";
import ProfilePic from "../UserInfo/ProfilePic";
import { useUserCache } from "../../context/cache/UserCacheProvider";
import DisplayNameComponent from "../UserInfo/DisplayNameComponent";
import CreatedAtDisplay from "../UIComponent/CreatedAtDisplay";
import { useNavigate } from "react-router-dom";

type PostTemplateProps = {
    postId: number;
}

function PostTemplate ({postId} : PostTemplateProps) {

    const {getUserFromCache, getOrFetchUserById} = useUserCache();
    const {getOrFetchPostById, getPostFromCache} = usePostCache();
    const [postUser, setPostUser] = useState<User | null>(() => {
        const post = getPostFromCache(postId);
        if (!post) return null;
        return getUserFromCache(post.userId) ?? null;
      });
    const [post, setPost] = useState<Post | null>(() => getPostFromCache(postId) ?? null);

    function setNewPost(post: Post) {

        if (post) {
            setPost(post);
        }

    }

    const navigate = useNavigate();

    useEffect(() => {

        if (post) return;

        const loadPost = async () => {
          try {
            const fetched = await getOrFetchPostById(postId);
            setPost(fetched);
          } catch (err) {
            console.error(err);
          }
        };
      
        loadPost();

    }, [post])

    useEffect(() => {

        if (post && postUser) return;
        if (!post) return;
        const loadUser = async () => {
            try {
                const fetched = await getOrFetchUserById(post.userId);
                setPostUser(fetched);
            } catch (err) {
                console.error(err);
              }
        }
        loadUser();

    }, [post])
    


    return (

        
        <>
            <div className="h-fit w-full flex border-b-2 border-(--twitter-border)">

    {post && (
            <div className="flex w-full h-fitl px-4 pt-3">
            <div className="flex w-12 mr-2">
                <div className="w-10 h-10" onClick={() => navigate(`/profile/${post.userId}`)}>
                    <ProfilePic user={postUser}/>
                </div>
            </div>

            <div className="pb-3 w-full h-fit">
                <div className="w-full h-fit flex-col">
                    <div className="w-full h-5 flex gap-2 align-middle text-white mb-0.5">
                            <div> 
                                <DisplayNameComponent user={postUser}/>
                            </div>
                            <div className="text-(--twitter-text)">
                                <UsernameComponent user={postUser}/>
                            </div>
                            <p>·</p>
                            <CreatedAtDisplay createdAt={post.createdAt} typeOfCreatedAt="timeago"/>
                    </div>
                    <div className="text-white max-h-32">
                        <p>
                        {post.text}
                        </p>
                    </div>
                    <div>
                        <PostInteractionComponent setNewPost={setNewPost} postId={post.id} likeList={post.likedBy} bookmarkList={post.bookmarkedBy}/>
                    </div>
                </div>

            </div>

        </div>
        ) }


            </div>
        </>

    )

}

export default PostTemplate;