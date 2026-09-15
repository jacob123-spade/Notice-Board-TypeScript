import { useNavigate } from "react-router-dom";

const Detail = ()=>{
    const nav = useNavigate(); 


    return (
        <div className="Detail">
            <section id="detail" className="page-content">
                {/* 게시글 본문 카드 */}
                <div className="ui-card detail-container">
                    <div className="detail-header">
                        <h1 className="detail-title mt-10">임시 제목</h1>
                        <div className="c-light mt-20">
                            <span>작성자: 임시 유저 | 2026/09/16</span>
                        </div>
                    </div>
                    <div className="detail-body">
                        임시 글 
                    </div>
                    <div className="button-section">
                        <button className="ui-btn btn-secondary" onClick={()=> nav("/")}>목록</button>
                    </div>
                </div>

                <div className="ui-card comment-container mt-20">
                    <h3 className="comment-title mb-20">댓글 수 5</h3>

                    <div className="comment-input-area mb-30">
                        <textarea 
                            className="comment-textarea" 
                            placeholder="따뜻한 댓글을 남겨주세요"
                            name="content"
                            
                        ></textarea>
                        <div className="comment-submit-wrapper">
                            <button className="ui-btn btn-primary">등록</button>
                        </div>
                    </div>

                    <div className="recommend-section">
                        <button 
                            className={`recommend-btn`} >
                            <span className="thumb-icon">👍</span>
                            <span className="recommend-label">추천</span>
                            <span className="recommend-count">0</span>
                        </button>
                    </div>

                    
                    
                </div>
            </section>
        </div>
    )
}

export default Detail; 