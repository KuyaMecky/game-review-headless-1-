export async function fetchAPI(query) {
  const url = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  if (!url) {
    console.warn("NEXT_PUBLIC_WORDPRESS_URL is not configured.");
    return null;
  }

  const res = await fetch(
    `${url}/graphql`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  if (json.errors) {
    throw new Error("GraphQL Error");
  }

  return json.data;
}
