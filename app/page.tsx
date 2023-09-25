import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-app">
      <h1 id="h1-app">hello world</h1>
      {/* <a href="/users">User</a> This way of using ancer tag to fetch the file lead to load the whole page again This lead to slow processing*/}
      <Link href="/users">User</Link>
    </main>
  );
}
