interface User {
  id: number;
  title: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //cache: "no-store", //This is to prevent caching and always fetch the latest data and mostly used when data is dynamic
    next: { revalidate: 10 }, //This is to revalidate the data after 10 seconds
    //caching memory is only valid for fetch function and not for axios and any other library
  }); //when we render fetch function the default caching is stored in memory and when we refresh the page the data is fetched from memory and not from server which lead to not getting the latest data so disable the caching when data is dyanmic
  const data: User[] = await res.json();
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
