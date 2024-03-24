// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Spin, Alert, Card } from 'antd';
// import '../styles/DetailView.less'; // Pastikan ini sudah mengandung definisi untuk tema gelap
// import { Article } from './Article';


// const DetailView: React.FC = () => {
//   const [article, setArticle] = useState<Article | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { url } = useParams<{ url: string }>();

//   useEffect(() => {
//     // Pastikan untuk menambahkan REACT_APP_ di depan nama environment variable Anda
//     const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//     // Menggunakan encodeURIComponent untuk memastikan parameter query URL dibentuk dengan benar
//     const encodedUrl = encodeURIComponent(decodeURIComponent(url || ''));
//     const apiUrl = `https://newsapi.org/v2/everything?q=${encodedUrl}&from=2024-02-22&sortBy=publishedAt&apiKey=${apiKey}`;

//     setIsLoading(true); // Memastikan spinner loading ditampilkan setiap kali melakukan fetch

//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Asumsikan data.articles adalah array; gunakan find untuk mendapatkan artikel yang sesuai
//         const foundArticle = data.articles.find((a: Article) => a.url === decodeURIComponent(url || ''));
//         setArticle(foundArticle || null);
//         setIsLoading(false);
//       })
//       .catch(err => {
//         setError(err.message || 'An error occurred');
//         setIsLoading(false);
//       });
//   }, [url]);

//   if (isLoading) return <Spin />;
//   if (error) return <Alert message="Error" description={error} type="error" />;
//   if (!article) return <Alert message="Article not found" type="info" />;

//   return (
//     <Card
//       title={article.title}
//       cover={<img alt="article" src={article.urlToImage || '/path/to/default-image.jpg'} />}
//     >
//       <p>Author: {article.author || 'Unknown'}</p>
//       <p>{article.description}</p>
//       <div dangerouslySetInnerHTML={{ __html: article.content || '' }}></div>
//     </Card>
//   );
// };

// export default DetailView;
export {}