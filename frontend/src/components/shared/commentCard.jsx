import { BlogContext } from "../../store/blogContext";
import { useContext } from "react";

const CommentCard = ({ comment }) => {
  const { isLoggedin } = useContext(BlogContext);
  
  return (
    <div
      key={comment.id}
      className="flex justify-between items-center space-x-4 py-2"
    >
      <div className="flex items-center space-x-4">
        <img
          src={comment.profile_pic}
          alt="profile pic"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-gray-900">{comment.username}</h4>
            <span className="text-sm text-gray-500">
              {comment.commented_at.split("T")[0]}
            </span>
          </div>
          <p className="text-gray-600">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
