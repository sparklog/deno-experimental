import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { KvUser } from "../lib/types";
import { getKvUser } from "../api/database";
import { setKvUser } from "../api/database/action";
import { createAsync, query } from "@solidjs/router";

export default function Home() {

  // const [user, setUser] = createSignal<KvUser | null>(null);
  const user = createAsync(() => getKvUser());
  return (
    <main>
      <Title>Test Deno for Solid  </Title>
      <h1>Hello world!</h1>
      <p>
        this is an experimental project for testing Deno Deploy features in SolidStart
      </p>
      <p>
       user email: {user()?.email}
      </p>
<form method="post" action={setKvUser}>
  <input type="text" name="email" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>

    </main>
  );
}
