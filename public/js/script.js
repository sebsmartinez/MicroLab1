document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      displayItems(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  });
  
  function displayItems(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous content
  
    if (!items || items.length === 0) {
      resultsDiv.innerHTML = '<p>No items found.</p>';
      return;
    }
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;
      resultsDiv.appendChild(div);
    });
  }
  