"use client";
import{ usePathname } from "next/navigation";

export default function Post() {
    const pathname = usePathname();
    return <p> {pathname} </p>; 
    //usePathname is a hook from the next/navigation module that is used to obtain the current path of the dynamic route and this value is stored in pathname in the function Post().
    //Inside the paragraph element it displays the path you're currently in i.e. when you visit a page that path of the URL is displayed on the screen.
}