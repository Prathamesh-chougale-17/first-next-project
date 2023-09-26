interface User {
  id: number;
  title: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: User[] = await res.json();
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
};

export default page;
