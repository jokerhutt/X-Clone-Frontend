import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import InteractionButton from "../ButtonComponent/InteractionButton";
import { useCurrentUser } from "../../context/currentUser/CurrentUserProvider";
import { useFeedContext } from "../../context/feed/FeedContext";
import { useState } from "react";
import { usePostCache } from "../../context/cache/PostCacheProvider";
import type { ModalType } from "../../types/ModalType";
import { useModal } from "../../context/misc/ModalProvider";
import type { Post } from "../../types/Post";
import Modal from "../Modal/Modal";

type PostInteractionComponentProps = {
    postId: number;
    likeList: number[];
    bookmarkList: number[];
    setNewPost: (post: Post) => void;
}

function PostInteractionComponent ({postId, likeList, bookmarkList, setNewPost} : PostInteractionComponentProps) {

    const {currentUser} = useCurrentUser();
    const {currentUserBookmarkIds, addToCurrentUserBookmarks, removeCurrentUserBookmarks, currentUserLikedIds, addToCurrentUserLikes, removeFromCurrentUserLikes} = useFeedContext();
    const { addToPostCache} = usePostCache(); 
    const {setModalType, modalType, setModalData} = useModal();

    function handleBookmark() {         
        if (!currentUser) return;
      
        const isBookmarked = currentUserBookmarkIds.includes(postId);
        const url = isBookmarked
          ? "http://localhost:8080/api/bookmarks/deleteBookmark"
          : "http://localhost:8080/api/bookmarks/createBookmark";
      
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookmarkedBy: currentUser.id,
            bookmarkedPost: postId,
          }),
        })
          .then(res => res.json())
          .then((updatedPost: Post) => {
            addToPostCache(updatedPost);
            setNewPost(updatedPost);
            isBookmarked
              ? removeCurrentUserBookmarks(postId)
              : addToCurrentUserBookmarks(postId);
          })
          .catch(err => console.error("Failed to update bookmark", err));
      }
    
    function handleLike() {
        if (!currentUser) return;
      
        const isLiked = currentUserLikedIds.includes(postId);
        const url = isLiked
          ? "http://localhost:8080/api/likes/deleteLike"
          : "http://localhost:8080/api/likes/createLike";
      
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ likerId: currentUser.id, likedPostId: postId }),
        })
          .then(res => res.json())
          .then((updatedPost: Post) => {
            addToPostCache(updatedPost);
            setNewPost(updatedPost);
            isLiked
              ? removeFromCurrentUserLikes(postId)
              : addToCurrentUserLikes(postId);
          })
          .catch(err => console.error("Failed to update like", err));
      }

    return (

        <>
            <div className="h-5 mt-3 text-(--twitter-text) w-full flex items-center align-middle justify-between">

                <InteractionButton postId={postId} numberList={[]}>
                    <FaRegComment 
                    onClick={() => {
                        if (currentUser) {
                            setModalType("replying")
                            setModalData({ postId, setNewPost })
                        }
                    }}/>
                </InteractionButton>

                <InteractionButton postId={postId} numberList={[]}>
                    <FaRepeat/>
                </InteractionButton>

                <InteractionButton postId={postId} checkOfIds={currentUserLikedIds} numberList={likeList}>
                    <FaRegHeart onClick={() => handleLike()}/>
                </InteractionButton>

                <InteractionButton postId={postId} checkOfIds={currentUserBookmarkIds} numberList={bookmarkList}>
                    <FaRegBookmark onClick={() => handleBookmark()}/>
                </InteractionButton>

            </div>
            
        </>

    )

}

export default PostInteractionComponent;