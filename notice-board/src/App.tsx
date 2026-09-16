import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useReducer } from 'react';
import type { PostType, Action} from './type/types';
import { PostDataContext, PostDispatchContext} from './context/context';
import { mockPosts } from './datas/data';
import Detail from './components/Detail';
import NewPosting from './components/newPosting';


const reducer = (state: PostType[], action: Action)=>{
    switch(action.type){
      case "CREATE": 
        return [...state, action.data];
        
      case "DELETE": 
        return state.filter((data)=> data.id !== action.id); 

      case "UPDATE": 
        return state.map((data)=>data.id === action.data.id ? action.data : data); 

      default: 
        return state; 
    }
}


function App() {
  const [postData, dispatch] = useReducer(reducer, mockPosts);
  
  const onCreatePost = (newPost: PostType)=>{
      dispatch({
        type: "CREATE", 
        data: newPost,
      })
  }

  const onDeletePost = (id: number)=>{
    dispatch({
      type: "DELETE", 
      id: id,
    })
  }

  const onUpdatePost = (updatedPostData: PostType)=>{
    dispatch({
      type: "UPDATE", 
      data: updatedPostData,
    })
  }

  return (
    <>
      <PostDataContext.Provider value={postData}>
        <PostDispatchContext.Provider value={{onCreatePost, onDeletePost, onUpdatePost}}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/detail/:currentPageId" element={<Detail></Detail>}></Route>
            <Route path="/new-Post" element={<NewPosting></NewPosting>}></Route>
          </Routes>
        </PostDispatchContext.Provider>
      </PostDataContext.Provider>
    </>
  )
}

export default App
