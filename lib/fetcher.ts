export async function fetcher(url: string) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
