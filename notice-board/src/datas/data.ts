import type { PostType } from "../type/types";

export const mockPosts: PostType[] = [
    { 
        id: 1024, 
        title: "AI 협업 프로젝트 팀원을 찾습니다!", 
        writer: "김프론트", 
        date: "2026-03-26", 
        numRecommend: 0,
        content: "리액트와 AI API를 연동하는 오픈소스 프로젝트입니다. 함께하실 분!", 
        likedUsers: [], 
    },
    { 
        id: 1023, 
        title: "오늘의 AI 뉴스: GPT-5 출시 임박?", 
        writer: "이테크", 
        date: "2026-03-25", 
        numRecommend: 2,
        content: "최신 AI 동향을 정리해드립니다. 확인해보세요.", 
        likedUsers: ["jack", "admin"], 
    },
    { 
        id: 1022, 
        title: "초보자를 위한 리액트 상태관리 가이드", 
        writer: "박코딩", 
        date: "2026-03-24", 
        numRecommend: 0,
        content: "Context API부터 Redux까지 한눈에 살펴봅시다.", 
        likedUsers: [], 
    }, 

    {
      id: 1025, 
      title: "리액트 공부 방향 잡기", 
      writer: "admin", 
      date: "2024-10-22", 
      numRecommend: 0, 
      content: "리액트 공부방향", 
      likedUsers: [], 
    }, 

    {
      id: 1026, 
      title: "로그인 페이지", 
      writer: "admin", 
      date: "2024-10-4", 
      numRecommend: 0, 
      content: "로그인 페이지 만들기",
      likedUsers: [],  
    }, 

    {
      id: 1027, 
      title: "공부 효율적으로 하는 법", 
      writer: "admin", 
      date: "2024-10-13", 
      numRecommend: 0, 
      content: "공부방법", 
      likedUsers: [], 
    }
];