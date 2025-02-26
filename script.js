
document.addEventListener('click', e => {
    if (e.target.classList.contains('tab-btn')) {
      const parent = e.target.closest('.tabs');
      const buttons = parent.querySelectorAll('.tab-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      const section = e.target.closest('section');
      const tabContents = section.querySelectorAll('.tab-content');
      tabContents.forEach(tc => tc.classList.remove('active'));
      
      const targetId = e.target.dataset.target;
      const targetContent = section.querySelector(`#${targetId}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    }
  });
  
  const travelLocations = [
    {
      lat: 40.12150192260742,
      lng: -100.45039367675781,
      title: 'Yellowstone',
      description: 'Yellowstone National Park: Enjoy natural wonders and wildlife.',
    },
    {
      lat: 37.29818344116211,
      lng: -113.02637481689453,
      title: 'Zion',
      description: 'Zion National Park: Majestic canyons and rock formations.',
    },
    {
      lat: 36.879207611083984,
      lng: -111.51039123535156,
      title: 'Horsehoe Bend',
      description: 'Horsehoe Bend: Iconic river bend with breathtaking views.',
    },
    {
        lat: 36.65796661376953,
        lng: -113.04910278320312,
        title: 'My location',
        description: 'My location: A point of interest with scenic views.',
      },
      {
        lat: 41.401859283447266,
        lng: -124.06495666503906,
        title: 'fern canyon',
        description: 'fern canyon: Iconic canyon with scenic views and unique rock formations.',
      },
      {
        lat: 42.944664001464844,
        lng: -122.10891723632812,
        title: 'My crater lake',
        description: 'My crater lake: A stunning lake surrounded by mountains, offering breathtaking scenery.',
      }
    
  ];
  
  window.initMap = function() {
    const mapOptions = {
      center: { lat: 38.0, lng: -110.0 },
      zoom: 5
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
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
        </div>
      `;
      
      const infoWindow = new google.maps.InfoWindow({ content: infoWindowContent });
      marker.addListener('click', () => infoWindow.open(map, marker));
    });
  };
  

  document.addEventListener('DOMContentLoaded', () => {
    loadHackerNews();
  });
  
  function loadHackerNews() {
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100')
      .then(response => response.json())
      .then(data => {
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
        
        const filteredStories = data.hits.filter(item => {
          if (!item.title) return false;
          const titleLower = item.title.toLowerCase();
          return regexes.some(regex => regex.test(titleLower));
        });
        
        const newsContainer = document.getElementById('news-container');
        
        if (filteredStories.length === 0) {
          newsContainer.innerHTML = '<p>No relevant news found.</p>';
        } else {
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
        
        document.getElementById('news-loading').style.display = 'none';
      })
      .catch(err => {
        console.error('Error fetching Hacker News data:', err);
        document.getElementById('news-loading').textContent = 'Failed to load news.';
      });
  }

  document.querySelectorAll('.preview').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = offsetX - centerX;
      const deltaY = offsetY - centerY;
      
      const rotateX = (deltaY / centerY) * -3;
      const rotateY = (deltaX / centerX) * 3;
      
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      const shadowX = (deltaX / centerX) * 10;
      const shadowY = (deltaY / centerY) * 10;
      card.style.boxShadow = `${-shadowX}px ${-shadowY}px 20px rgba(0, 0, 0, 0.2)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
      card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
  });
  