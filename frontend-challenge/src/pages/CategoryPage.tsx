// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Article } from '../components/Article'; // Pastikan path ini benar

// const CategoryPage: React.FC = () => {
//   const { sourceName } = useParams<{ sourceName: string }>();
//   const [articles, setArticles] = useState<Article[]>([]);

//   useEffect(() => {
//     if (sourceName) {
//       // Perbaikan URL: Menggunakan `sources` (jika didukung oleh API) atau memperbaiki struktur query
//       // Pastikan untuk mengganti `q=tesla` dengan parameter yang benar sesuai kebutuhan Anda
//       const apiUrl = `https://newsapi.org/v2/everything?domains=${encodeURIComponent(sourceName)}&from=2024-02-23&sortBy=publishedAt&apiKey=e869e0b91f664714a0b1d605d5e8f467`;

//       fetch(apiUrl)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Memastikan bahwa `articles` selalu array untuk menghindari error saat mapping
//           if (data.articles) {
//             setArticles(data.articles);
//           } else {
//             // Handle ketika `articles` tidak ditemukan di response
//             setArticles([]);
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching articles:", error);
//           setArticles([]); // Memastikan state articles kembali ke array kosong jika ada error
//         });
//     } else {
//       console.log("sourceName is undefined");
//       setArticles([]); // Juga baik untuk mengosongkan articles jika sourceName undefined
//     }
//   }, [sourceName]);

//   return (
//     <div>
//       {sourceName ? (
//         <>
//           <h1>Artikel dari: {decodeURIComponent(sourceName)}</h1>
//           {articles.length > 0 ? (
//             articles.map((article) => (
//                 <div key={article.url || article.title}>
//                 <h2>{article.title}</h2>
//                 {/* Konten lain dari artikel */}
//                 </div>
//             ))
//             ) : (
//             <p>Tidak ada artikel yang ditemukan untuk kategori ini.</p>
//             )}
//         </>
//       ) : (
//         <p>Kategori tidak ditemukan atau tidak spesifik.</p>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

export {}