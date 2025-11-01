import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
};

export default async function Blog() {
   
    await new Promise((resolve) => {
        setTimeout(() => resolve("delay"), 2000);
    });
    return (
        <div>
            <h1>Blogs</h1>
            <p>This is the Main Blog page.</p>
        </div>
    );
}
