import "./PostItem.css"; 
import type { PostType } from "../type/types";
import { useNavigate } from "react-router-dom";

const PostItem = (itemProps: Omit<PostType, "content" | "likedUsers">)=>{
    const nav = useNavigate(); 

    const onMovePage = ()=>{
        nav(`/detail/${itemProps.id}`)
    }

    return (
        <tr className="tr-link" onClick={onMovePage}>
            <td>{itemProps.id}</td>
            <td className="fw-600">{itemProps.title}</td>
            <td> {itemProps.date}</td>
            <td>{itemProps.writer}</td>
            <td className="c-primary">{itemProps.numRecommend}</td>
        </tr>
    )
}

export default PostItem; 