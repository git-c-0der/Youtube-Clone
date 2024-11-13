import Comment from "./Comment";


const CommentList = ({comments}) => {
    // console.log(comments);
    return comments.map((comment, index)=>(
        <div key={index}>
            <Comment comment={comment} />
            <div className="pl-10 border border-l-black ml-5">
                <CommentList comments={comment["replies"]} />
            </div>
        </div>
    ))
}

export default CommentList;