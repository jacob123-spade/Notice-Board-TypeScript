import React from "react";
import type { PostDispatchContextType, PostType } from "../type/types";

export const PostDataContext = React.createContext<PostType[] | null>(null); 
export const PostDispatchContext = React.createContext< PostDispatchContextType| null>(null); 