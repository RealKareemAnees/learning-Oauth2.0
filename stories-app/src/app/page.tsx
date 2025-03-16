import { getUserName } from "@/actions/getUsername.action";

export default async function Home() {
  const username = await getUserName();
  return (
    <>
      <h1>hello {username}</h1>
    </>
  );
}
