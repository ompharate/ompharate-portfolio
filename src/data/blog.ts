async function getAllPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=ompharate",
    {
      method: "GET",
    }
  );
  return await response.json();
}

export async function getBlogPosts() {
  return getAllPosts();
}

export async function getBlog(slug: string) {
  const article = fetch(`https://dev.to/api/articles/ompharate/${slug}`).then(
    (res) => res.json()
  );
  return article;
}
