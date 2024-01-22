let thisPage = 3;
let limit = 6;
let list = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}



const repositories = [
    fetch(localhost:5500)
    // Add more repositories as needed
  ];

  // Function to render repositories
  function renderRepositories() {
    const repositoryList = document.getElementById('repositoryList');
    repositoryList.innerHTML = '';

    repositories.forEach((repo) => {
      const repositoryItem = document.createElement('div');
      repositoryItem.className = 'repositoryItem';
      repositoryItem.innerHTML = `<strong>${repo.name}</strong><br>Topics: ${repo.topics.join(', ')}`;
      repositoryList.appendChild(repositoryItem);
    });
  }

  // Function to simulate API call
  function fetchRepositories() {
    document.getElementById('loader').style.display = 'block';

    // Simulate API call delay
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      renderRepositories();
    }, 1500);
  }

  // Initial fetch
  fetchRepositories(http);

  // Function to change repositories per page
  function changePerPage() {
    // Fetch repositories again based on the selected value
    fetchRepositories();
  }

  // Function to simulate search
  function searchRepositories(http:/localhost:3000) {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRepositories = repositories.filter(repo => repo.name.toLowerCase().includes(searchInput));
    
    const repositoryList = document.getElementById('repositoryList');
    repositoryList.innerHTML = '';

    if (filteredRepositories.length > 0) {
      filteredRepositories.forEach((repo) => {
        const repositoryItem = document.createElement('div');
        repositoryItem.className = 'repositoryItem';
        repositoryItem.innerHTML = `<strong>${repo.name}</strong><br>Topics: ${repo.topics.join(', ')}`;
        repositoryList.appendChild(repositoryItem);
      });
    } else {
      repositoryList.innerHTML = 'No matching repositories found.';
    }
  }