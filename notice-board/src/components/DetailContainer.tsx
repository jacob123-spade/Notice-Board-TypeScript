import { useNavigate } from "react-router-dom";
import type { PostType } from "../type/types";

interface DetailContainerProps {
    currentPageData: PostType; 
}

const DetailContainer = ({currentPageData}: DetailContainerProps)=>{
    const nav = useNavigate(); 

    return (
        <div className="ui-card detail-container">
            <div className="detail-header">
                <h1 className="detail-title mt-10">{currentPageData.title}</h1>
                <div className="c-light mt-20">
                    <span>{`작성자: ${currentPageData.writer} | ${currentPageData.date}`}</span>
                </div>
            </div>
            <div className="detail-body">
                {currentPageData.content} 
            </div>
            <div className="button-section">
                <button className="ui-btn btn-secondary" onClick={()=> nav("/")}>목록</button>
            </div>
        </div>
    )
}

export default DetailContainer; 