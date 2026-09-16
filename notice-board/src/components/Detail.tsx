import "./Detail.css";
import DetailCommentContainer from "./DetailCommentContainer";
import DetailContainer from "./DetailContainer";
import { useContext } from "react";
import { PostDataContext } from "../context/context";
import { useParams } from "react-router-dom";
import Error from "./Error";

const Detail = ()=>{
    const {currentPageId} = useParams(); 
    const postData = useContext(PostDataContext); 
    const filteredData = postData ? postData.find((data)=>data.id === Number(currentPageId)) : null;
    
    if (!filteredData){
        return <Error></Error>
    }
    

    return (
        <div className="Detail">
            <section id="detail" className="page-content">
                <DetailContainer currentPageData={filteredData}></DetailContainer>
                <DetailCommentContainer></DetailCommentContainer>
            </section>
        </div>
    )
}

export default Detail; 