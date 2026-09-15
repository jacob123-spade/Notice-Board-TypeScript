export interface PostType {
    id: number; 
    title: string; 
    writer: string; 
    date: string; 
    numRecommend: number; 
    content: string; 
    likedUsers: string[]; 
}

export type Action = {
    type: "CREATE" | "UPDATE"; 
    data: PostType; 
} | {
    type: "DELETE"; 
    id: number; 
}

export type PostDispatchContextType = {
    onCreatePost: (newPost: PostType) => void; 
    onDeletePost: (id: number)=> void; 
    onUpdatePost: (updatedPostData: PostType)=> void; 
}

