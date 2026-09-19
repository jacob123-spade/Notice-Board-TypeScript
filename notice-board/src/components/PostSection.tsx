import { useState } from "react";
import PostAISection from "./PostAISection";

const PostSection = ()=>{
    const [posts, setPosts] = useState({
        title: "",
        content: "",
    });

    const onChangePostValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target;

        setPosts({
            ...posts,
            [name]: value
        })

        console.log(posts);

    }

    return (
        <>
            <h1 className="mb-30">새 글 작성</h1>
            <div className="grid-2">
                <div className="ui-card">
                    <input
                    value={posts.title}
                    name="title"
                    onChange={onChangePostValue}
                    type="text" placeholder="제목을 입력하세요" className="ui-input"/>

                    <textarea
                    value={posts.content}
                    name="content"
                    onChange={onChangePostValue}
                    placeholder="내용을 입력하세요..." className="ui-textarea"></textarea>

                    <div className="text-right mt-20">
                        <button className="ui-btn btn-primary">등록하기</button>
                    </div>
                </div>
                <PostAISection></PostAISection>
            </div>
        </>
    )
}

export default PostSection;
