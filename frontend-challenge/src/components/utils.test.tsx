import { groupArticlesBySource, Article } from './utils'; // Sesuaikan path jika diperlukan

// Contoh data artikel dari API
const articles: Article[] = [
  {
    source: { id: null, name: "Cointelegraph" },
    author: "Cointelegraph",
    title: "Terra founder Do Kwon released in Montenegro",
    description: null,
    url: "https://cointelegraph.com/news/terra-founder-do-kwon-released-in-montenegro",
    urlToImage: null,
    publishedAt: "2024-03-24T14:40:57Z",
    content: null
  },
  {
    source: { id: null, name: "New York Post" },
    author: "Fox Business",
    title: "Chick-fil-A announces that it will no longer serve antibiotic-free chicken",
    description: "“To maintain supply of the high-quality chicken you expect from us, Chick-fil-A will shift from No Antibiotics Ever (NAE) to No Antibiotics Important To Human Medicine (NAIHM) starting in the…",
    url: "https://nypost.com/2024/03/24/lifestyle/chick-fil-a-will-no-longer-serve-antibiotic-free-chicken/",
    urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2024/03/photo-tamara-beckwith-ny-post-22355068.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2024-03-24T13:58:00Z",
    content: "Chick-fil-A announced that it would be shifting from antibiotic-free chicken starting this spring, citing supply reasons, in an update shared Thursday. \n“To maintain supply of the high-quality chick… [+1677 chars]"
  },
  // Tambahkan lebih banyak artikel untuk tes yang lebih komprehensif
];

describe('groupArticlesBySource', () => {
  it('should group articles by their source name', () => {
    const grouped = groupArticlesBySource(articles);
    expect(Object.keys(grouped)).toEqual(expect.arrayContaining(['Cointelegraph', 'New York Post']));
    expect(grouped['Cointelegraph'].length).toBe(1);
    expect(grouped['New York Post'].length).toBe(1);
  });

  // Tes lainnya bisa diadaptasi dari contoh sebelumnya jika relevan
});
