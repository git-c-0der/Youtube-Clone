import CommentList from "./CommentList";

const commentsData = [
    {
        name: "Name",
        text: "Ye mera comment hai.",
        replies: [
            {
                name: "Name",
                text: "Ye mera comment hai.",
                replies: [
                    {
                        name: "Name",
                        text: "Ye mera comment hai.",
                        replies: []
                    },
                    {
                        name: "Name",
                        text: "Ye mera comment hai.",
                        replies: []
                    }
                ]
            },
            {
                name: "Name",
                text: "Ye mera comment hai.",
                replies: []
            },
            {
                name: "Name",
                text: "Ye mera comment hai.",
                replies: [
                    {
                        name: "Name",
                        text: "Ye mera comment hai.",
                        replies: [
                            {
                                name: "Name",
                                text: "Ye mera comment hai.",
                                replies: []
                            },
                            {
                                name: "Name",
                                text: "Ye mera comment hai.",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Name",
        text: "Ye mera comment hai.",
        replies: []
    },
    {
        name: "Name",
        text: "Ye mera comment hai.",
        replies: []
    },
    {
        name: "Name",
        text: "Ye mera comment hai.",
        replies: []
    }
];

const CommentContainer = () => {
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentList comments={commentsData} />
        </div>
    );
};

export default CommentContainer;