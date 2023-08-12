
const apiUrl = 'https://gnews.io/api/v4/search?q=example&apikey=63f2bdf48e7f76b8c7c5dabaae929c73';

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles; // This will contain an array of news articles
    const images = document.querySelectorAll('.image');
    const titles=document.querySelectorAll('.heading');
    const contents=document.querySelectorAll('.content');
    const urls=document.querySelectorAll('.myurl');

    // Loop through the articles and access the properties
    articles.forEach((article, index) => {
      console.log('Title:', article.title);
      console.log('Description:', article.description);
      console.log('Content:', article.content);
      console.log('URL:', article.url);
      console.log('Image:', article.image);
      console.log('Published At:', article.publishedAt);
      console.log('Source Name:', article.source.name);
      console.log('Source URL:', article.source.url);
      console.log('---');

      if (images[index] && article.image) {
        // Set the src attribute for the corresponding image element
        images[index].src = article.image;
      }
      if(titles[index] && article.title){
        titles[index].innerHTML=article.title;
      }
      if(contents[index] && article.content){
        contents[index].innerHTML=article.content;
      }
      if(urls[index] && article.url){
        urls[index].href=article.url;
      }
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

