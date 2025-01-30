import React from "react";

export interface BannerProps{
    bannerStyle:React.CSSProperties,
    title:string;
    desc:string;
}

export interface TopNavProps{
    label:string;
    pathname:string;
}

export interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;  // onClick handler for button
    label: string;          // Text to display on the button
    ariaSelected: boolean;  // Determines if the button is selected or not
  }


export interface Post{
    id:number;
    title:string;
    body:string;
}

export interface PostStore{
    posts:Post[];
    setPosts:(posts:Post[]) => void;
}