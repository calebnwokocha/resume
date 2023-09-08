fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=Jesus_Christ&exintro')
   .then(response => response.json())
   .then(data => {
       const page = data.query.pages;
       const content = page[Object.keys(page)[0]].extract;
       document.getElementById('wikipedia-content').innerHTML = content;
   });
