document.addEventListener('DOMContentLoaded', function() {
    fetch('data.csv')
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split('\n').slice(1); // 첫 번째 줄(헤더)을 제외
            const gallery = document.getElementById('gallery');
            rows.forEach(row => {
                const columns = row.split(',');
                const imageFilename = columns[0];
                const caption = columns[1];
                const itemHTML = `
                    <div class="gallery-item">
                        <img src="images/${imageFilename}" alt="${caption}">
                        <div class="caption">${caption}</div>
                    </div>
                `;
                gallery.innerHTML += itemHTML;
            });
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const filtersContainer = document.getElementById('filters');
    const filters = document.querySelectorAll('.filter');
    
    // 필터 토글 버튼 이벤트 리스너
    toggleFiltersBtn.addEventListener('click', () => {
        filtersContainer.style.display = filtersContainer.style.display === 'none' ? 'block' : 'none';
    });

    // 각 필터 버튼에 대한 클릭 이벤트 리스너
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const model = this.dataset.model;
            const genre = this.dataset.genre;
            const method = this.dataset.method;
            const galleryItems = document.querySelectorAll('.gallery-item');

            galleryItems.forEach(item => {
                const itemModel = item.dataset.model;
                const itemGenre = item.dataset.genre;
                const itemMethod = item.dataset.method;

                if ((model && model !== itemModel) || 
                    (genre && genre !== itemGenre) || 
                    (method && method !== itemMethod)) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            });
        });
    });

    fetch('data.csv') // 'data.csv'는 실제 CSV 파일의 경로로 변경해야 합니다.
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split('\n').slice(1); // 첫 번째 줄(헤더)을 제외
            const gallery = document.getElementById('gallery');
            rows.forEach(row => {
                const columns = row.split(',');
                const imageFilename = columns[0];
                const caption = columns[1];
                const model = columns[2];
                const genre = columns[3];
                const method = columns[4];
                const itemHTML = `
                    <div class="gallery-item" data-model="${model}" data-genre="${genre}" data-method="${method}">
                        <img src="images/${imageFilename}" alt="${caption}">
                        <div class="caption">${caption}</div>
                    </div>
                `;
                gallery.innerHTML += itemHTML;
            });
        });
});

// document.addEventListener('scroll', function() {
//     const galleryItems = document.querySelectorAll('.gallery-item');
//     galleryItems.forEach(item => {
//         const itemPosition = item.getBoundingClientRect().top; // 뷰포트 상단부터 요소의 상단까지의 거리
//         const viewportHeight = window.innerHeight; // 뷰포트의 높이

//         // 요소가 뷰포트에 들어오면 불투명도를 1로 설정
//         if (itemPosition < viewportHeight) {
//             item.style.opacity = 1;
//         } else {
//             item.style.opacity = 0;
//         }
//     });
// });