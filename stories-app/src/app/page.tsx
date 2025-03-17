import { getStrories } from "@/actions/getStories.action";
import { getUserName } from "@/actions/getUsername.action";

export default async function Home() {
  const username = await getUserName();

  const stories = await getStrories();

  return (
    <>
      <h1>hello {username}</h1>

      <ul>
        {stories.map((story) => (
          <li key={story}>{story}</li>
        ))}
      </ul>
    </>
  );
}
