const DetailCommentContainer = ()=>{
    return (
        <div className="ui-card comment-container mt-20">
            <h3 className="comment-title mb-20">댓글 수 5(임시 댓글 수)</h3>

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
    )
}

export default DetailCommentContainer; 