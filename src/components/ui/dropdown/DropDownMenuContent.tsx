import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useCurrentUser } from "../../../context/Auth/CurrentUserProvider";
import { usePost } from "../../../lib/hooks/queries/usePost";
import { useDeletePost } from "../../../lib/hooks/mutations/useDeletePost";
import { HeroIcon } from "../HeroIcon";
import { CustomDropdownItem } from "./CustomDropdownItem";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../lib/hooks/queries/useUser";
import FollowButton from "../FollowButton";
import { usePinPost } from "../../../lib/hooks/mutations/usePinPost";
import { RiUnpinLine } from "react-icons/ri";
import { RiPushpinLine } from "react-icons/ri";

type DropdownMenuContentProps = {
    postId: number;
    mainPost?: boolean;
    closeMenu: () => void;
}

export function DropdownMenuContent ({postId, mainPost, closeMenu}: DropdownMenuContentProps) {


    const {currentUser} = useCurrentUser();
    const {data: post} = usePost(postId);
    const isOwnPost = post?.userId == currentUser?.id;
    const {data: pageUser} = useUser(post?.userId);
    if (!post || !currentUser) return null;
    const deletePost = useDeletePost(currentUser.id, post.parentId)
    const pinPost = usePinPost(postId);
    const navigate = useNavigate();

    const isPinned = currentUser.pinnedPostId == postId;

    const handleDeletePost = () => {
        deletePost?.mutate(postId);
        closeMenu();
        if (mainPost) {
            const isInternalReferrer = document.referrer.startsWith(window.location.origin);
            if (isInternalReferrer) {
                navigate(-1);
              } else {
                navigate("/");
              }
        }
    }

    const pinToProfile = () => {
        pinPost.mutate({isPinned})
    }

    return (
        <DropdownMenu.Content
          className="z-50 min-w-46 animate-hover-card rounded-md bg-(--background-main) border border-twitterBorder shadow-[0_0_5px_1px_gray] p-1"
          sideOffset={5}
          align="end"
        >
          {isOwnPost ? (
        <>
        <CustomDropdownItem customClassName="text-red-500" text="Delete" handleDropdownMutation={handleDeletePost}>     
            <HeroIcon iconName="TrashIcon" className="h-4 w-4"/>
        </CustomDropdownItem>
        <CustomDropdownItem customClassName="text-twitterText" text={`${isPinned ? "Unpin from" : "Pin to"} your profile`} handleDropdownMutation={pinToProfile}>     
            {isPinned ? <RiUnpinLine className="text-md"/> : <RiPushpinLine className="text-md"/>            }
        </CustomDropdownItem>
        </>
          ) : (
        <DropdownMenu.Item className="text-twitterText px-3 py-2 text-sm focus:outline-none focus-visible:outline-none items-center gap-2 flex hover:bg-twitterTextAlt/20 rounded cursor-pointer">
            <FollowButton pageUser={pageUser} closeModal={closeMenu}>
            <div className="flex items-center gap-2">
                <HeroIcon iconName="UserPlusIcon" className="h-4 w-4"/>
                {pageUser?.followers.includes(currentUser.id) ? <p>unfollow @{pageUser.username}</p> : <p>follow @{pageUser?.username}</p>}
            </div>
            </FollowButton>
        </DropdownMenu.Item>
          )}  
        </DropdownMenu.Content>
    )

}