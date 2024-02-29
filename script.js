// document.addEventListener('DOMContentLoaded', function() {
//     fetch('data.csv')
//         .then(response => response.text())
//         .then(csv => {
//             const rows = csv.split('\n').slice(1); // 첫 번째 줄(헤더)을 제외
//             const gallery = document.getElementById('gallery');
//             rows.forEach(row => {
//                 const columns = row.split(',');
//                 const imageFilename = columns[0];
//                 const caption = columns[1];
//                 const itemHTML = `
//                     <div class="gallery-item" data-aos="fade-up">
//                         <img src="images/${imageFilename}" alt="${caption}">
//                         <div class="caption">${caption}</div>
//                     </div>
//                 `;
//                 gallery.innerHTML += itemHTML;
//             });
//             // AOS.init();// 동적으로 내용을 추가한 후 AOS 초기화
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const toggleFiltersBtn = document.getElementById('toggleFilters');
//     const filtersContainer = document.getElementById('filters');
//     const filters = document.querySelectorAll('.filter');
    
//     // 필터 토글 버튼 이벤트 리스너
//     toggleFiltersBtn.addEventListener('click', () => {
//         filtersContainer.style.display = filtersContainer.style.display === 'none' ? 'block' : 'none';
//     });

//     // 각 필터 버튼에 대한 클릭 이벤트 리스너
//     filters.forEach(filter => {
//         filter.addEventListener('click', function() {
//             const model = this.dataset.model;
//             const genre = this.dataset.genre;
//             const method = this.dataset.method;
//             const galleryItems = document.querySelectorAll('.gallery-item');

//             galleryItems.forEach(item => {
//                 const itemModel = item.dataset.model;
//                 const itemGenre = item.dataset.genre;
//                 const itemMethod = item.dataset.method;

//                 if ((model && model !== itemModel) || 
//                     (genre && genre !== itemGenre) || 
//                     (method && method !== itemMethod)) {
//                     item.style.display = 'none';
//                 } else {
//                     item.style.display = 'block';
//                 }
//             });
//         });
//     });

//     fetch('data.csv') // 'data.csv'는 실제 CSV 파일의 경로로 변경해야 합니다.
//         .then(response => response.text())
//         .then(csv => {
//             const rows = csv.split('\n').slice(1); // 첫 번째 줄(헤더)을 제외
//             const gallery = document.getElementById('gallery');
//             rows.forEach(row => {
//                 const columns = row.split(',');
//                 const imageFilename = columns[0];
//                 const caption = columns[1];
//                 const model = columns[2];
//                 const genre = columns[3];
//                 const method = columns[4];
//                 const itemHTML = `
//                     <div class="gallery-item" data-model="${model}" data-genre="${genre}" data-method="${method}">
//                         <img src="images/${imageFilename}" alt="${caption}">
//                         <div class="caption">${caption}</div>
//                     </div>
//                 `;
//                 gallery.innerHTML += itemHTML;
//             });
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const toggleFiltersBtn = document.getElementById('toggleFilters');
//     const galleryItems = document.querySelectorAll('.gallery-item');
//     const filterContainer = document.querySelector('.filter-container'); // .filter-container 선택

//     toggleFiltersBtn.addEventListener('click', function() {
//         // 버튼의 텍스트가 "Filter"일 때
//         if (this.textContent === "Filter") {
//             this.textContent = "All"; // 버튼 텍스트를 "All"로 변경
//             filterContainer.style.display = "block"; // 필터 컨테이너를 보이게 함
//         } 
//         // 버튼의 텍스트가 "All"일 때
//         else if (this.textContent === "All") {
//             // 모든 .gallery-item 요소를 보이게 함
//             galleryItems.forEach(item => {
//                 item.style.display = "block";
//             });
//             this.textContent = "Filter"; // 버튼 텍스트를 "Filter"로 변경
//             filterContainer.style.display = "none"; // 필터 컨테이너를 숨김
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // 데이터 로딩 및 초기화
    fetch('data.csv').then(response => response.text()).then(csv => {
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
                <div class="gallery-item" data-model="${model}" data-genre="${genre}" data-method="${method}" data-aos="fade-up">
                    <img src="images/${imageFilename}" alt="${caption}">
                    <div class="caption">${caption}</div>
                </div>
            `;
            gallery.innerHTML += itemHTML;
        });
    });

    // 필터 토글 및 All/Filter 버튼 동작
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const filterContainer = document.getElementById('filters');
    
    toggleFiltersBtn.addEventListener('click', function() {
        if (this.textContent === "Filter") {
            this.textContent = "All";
            filterContainer.style.display = "block";
        } else if (this.textContent === "All") {
            this.textContent = "Filter";
            filterContainer.style.display = "none";
            // 모든 .gallery-item 요소를 다시 보이게 함
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.style.display = "block";
            });
        }
    });

    // 필터 버튼 동작
    document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', function() {
            const model = this.dataset.model;
            const genre = this.dataset.genre;
            const method = this.dataset.method;
            document.querySelectorAll('.gallery-item').forEach(item => {
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
});
