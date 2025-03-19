"use server"
export async function getAllPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=ompharate&state=published",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  console.log("res",response);
  return await response.json();
}



export async function getBlog(slug: string) {
  const article = await fetch(
    `https://dev.to/api/articles/ompharate/${slug}`
  ).then((res) => res.json());
  return article;
}

export async function getBlogByTag(tag: string) {
  const articles = await fetch(
    `https://dev.to/api/articles/ompharate`
  ).then((res) => res.json());

  const filteredArticles = articles.filter((article: any) =>
    article.tag_list.includes(tag)
  );
  return filteredArticles;
}
