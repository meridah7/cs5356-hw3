// Google Maps initialization for travel locations
const travelLocations = [
  ];
  
  function initMap() {
    const mapOptions = {
      center: { lat: 40.0, lng: -20.0 },
      zoom: 2
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Add markers and info windows for each travel location
    travelLocations.forEach(loc => {
      const marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: map,
        title: loc.title
      });
      
      const infoWindowContent = `
        <div style="max-width:200px;">
          <h3>${loc.title}</h3>
          <p>${loc.description}</p>
          <img src="${loc.image}" alt="${loc.title}" style="width:100%; border-radius:5px;">
        </div>
      `;
      
      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }
  
  /* Hacker News API implementation */
  document.addEventListener('DOMContentLoaded', () => {
    loadHackerNews();
  });
  
  function loadHackerNews() {
    // Fetch the top 50 front page stories from Hacker News via Algolia.
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50')
      .then(response => response.json())
      .then(data => {
        // Extended regex patterns for filtering stories.
        const regexes = [
          /\bnews\b/i,
          /\bai\b/i,
          /\bartificial intelligence\b/i,
          /\bmachine learning\b/i,
          /\bdeep learning\b/i,
          /\bneural network\b/i,
          /\baugmented reality\b/i,
          /\bvirtual reality\b/i,
          /\bextended reality\b/i,
          /\bar\b/i,
          /\bvr\b/i,
          /\bmetaverse\b/i,
          /\btransformer\b/i,
          /\bgpt\b/i,
          /\bchatgpt\b/i,
          /\btechnology\b/i,
          /\bdiffusion models\b/i,
          /\bstable diffusion\b/i,
          /\bdall[- ]?e\b/i,
          /\bmultimodal\b/i,
          /\breinforcement learning\b/i,
          /\bgan\b/i,
          /\bgenerative adversarial networks\b/i,
          /\bnlp\b/i,
          /\bcomputer vision\b/i,
          /\bspatial computing\b/i,
          /\bedge ai\b/i,
          /\bbig data\b/i,
          /\bpredictive analytics\b/i,
          /\bquantum computing\b/i,
          /\bdigital twin\b/i,
          /\bdeepseek\b/i,
          /\bhugging face\b/i,
          /\bbert\b/i,
          /\bvit\b/i,
          /\bmoe training\b/i,
          /\bopenep\b/i
        ];
        
        // Filter stories: keep those whose title contains at least one of the keywords.
        const filteredStories = data.hits.filter(item => {
          if (!item.title) return false;
          const titleLower = item.title.toLowerCase();
          return regexes.some(regex => regex.test(titleLower));
        });
        
        const newsContainer = document.getElementById('news-container');
        
        // If no stories match, display a message.
        if (filteredStories.length === 0) {
          newsContainer.innerHTML = '<p>No relevant news found.</p>';
        } else {
          // For each filtered story, create a news card.
          filteredStories.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
              <h4>${item.title}</h4>
              <p><small>by ${item.author} on ${new Date(item.created_at).toLocaleDateString()}</small></p>
              <a href="${item.url || '#'}" target="_blank">Read More</a>
            `;
            newsContainer.appendChild(card);
          });
        }
        
        // Hide the loading message.
        document.getElementById('news-loading').style.display = 'none';
      })
      .catch(err => {
        console.error('Error fetching Hacker News data:', err);
        document.getElementById('news-loading').textContent = 'Failed to load news.';
      });
  }
  