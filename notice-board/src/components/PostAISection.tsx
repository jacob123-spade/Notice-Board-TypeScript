const PostAISection = ()=>{
    return (
        <>
            <aside className="ui-card ai-analysis-section">
                <h3 className="c-secondary mb-30">
                    <span className="ai-icon">🤖</span>
                    AI 실시간 문맥 분석
                </h3>

                <div className="analysis-metrics">
                    <div className="metric-item">
                        <span className="label">글자 수</span>
                        {/* 실시간 데이터 수치 강조 */}
                        <strong className="value">
                            <span className="unit">자</span>
                        </strong>
                    </div>
                    <div className="metric-item">
                        <span className="label">예상 읽기 시간</span>
                        <strong className="value">
                            ~1 <span className="unit">분</span>
                        </strong>
                    </div>
                </div>

                <div className="ai-status">
                    <span className="label">분석 상태</span>
                    <span className="status-badge green">
                        <span className="dot"></span>
                        Ready
                    </span>
                </div>

                <div className="analysis-results">
                    <h4>✅ 가이드라인 준수</h4>
                    <ul>
                        <li className="pass">타인 존중</li>
                        <li className="pass">주제 적합성</li>
                        <li className="pass">미디어 임베딩</li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default PostAISection;
