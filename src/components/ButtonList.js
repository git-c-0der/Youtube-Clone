import Button from "./Button";

const ButtonList = () => {
    const itemList = ["All", "Live", "Sports", "Music", "Gaming", "Cooking", "News", "Bhakti"];
    return (
        <div>
            {
                itemList.map(
                    (name, index) => <Button key={index} name={name} />
                )
            }
        </div>
    );
};

export default ButtonList;