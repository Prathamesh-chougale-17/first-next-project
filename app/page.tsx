import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import Pheonix from "@/public/pheonix.png";

interface User {
  userId: number;
  id: number;
  title: string;
}

const Home = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   next: { revalidate: 10 },
  // });
  //cache: "no-store", //This is to prevent caching and always fetch the latest data and mostly used when data is dynamic
  //This is to revalidate the data after 10 seconds
  //caching memory is only valid for fetch function and not for axios and any other library
  //when we render fetch function the default caching is stored in memory and when we refresh the Home the data is fetched from memory and not from server which lead to not getting the latest data so disable the caching when data is dyanmic
  // const data: User[] = await res.json();

  //auth
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>hello {session?.user?.name}</h1>

      <Image src={Pheonix} alt="Pheonix" />
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.userId} {user.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Home;
