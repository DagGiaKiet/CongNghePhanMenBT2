document.getElementById('actionButton').addEventListener('click', function () {
    const membersList = document.getElementById('membersList');
    const images = ['DangGiaKiet', 'QuocKiet', 'HoangLong'];

    if (membersList.innerHTML === '') {
        // Hiển thị danh sách và hình ảnh
        const members = ['Đặng Gia Kiệt', 'Phùng Quốc Kiệt', 'Hồ Hoàng Long'];
        const list = members.map(name => `<li>${name}</li>`).join('');
        membersList.innerHTML = `<ul>${list}</ul>`;

        images.forEach(id => {
            const image = document.getElementById(id);
            image.classList.add('show'); // Thêm class để hiển thị
        });
    } else {
        // Ẩn danh sách và hình ảnh, khung trở về trạng thái ban đầu
        membersList.innerHTML = '';
        images.forEach(id => {
            const image = document.getElementById(id);
            image.classList.remove('show'); // Xóa class để ẩn
        });
    }
});