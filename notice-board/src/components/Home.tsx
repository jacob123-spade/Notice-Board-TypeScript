import { useContext } from "react";
import "./Home.css"; 
import PostItem from "./PostItem";
import { PostDataContext } from "../context/context";


const Home = ()=>{
    const postData = useContext(PostDataContext); 
    

    return (
        <div className="Home">
            <section id="home" className="page-content active">
                <div className="flex-between">
                    <h1>전체 게시판</h1>
                    <form className="search-section">
                        <input
                            type="text"
                            placeholder="Search"
                        />
                        
                        <button type="submit" className="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </form>
                    <button className="ui-btn btn-primary">새 글 쓰기</button>
                </div>
                <div className="ui-card">
                    <table className="ui-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="w-60p">제목</th>
                                <th>작성일</th>
                                <th>작성자</th>
                                <th>추천</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postData ? (postData.map((data)=>{
                                return <PostItem key={data.id} {...data}></PostItem>
                            })) : "아직 글이 존재하지 않아요"}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Home; 