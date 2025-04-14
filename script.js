document.getElementById('actionButton').addEventListener('click', function() {
    const members = ['Phùng Quốc Kiệt', 'Đặng Gia Kiệt', 'Hồ Hoàng Long'];
    const list = members.map(name => `<li>${name}</li>`).join('');
    document.getElementById('membersList').innerHTML = `<ul>${list}</ul>`;

    // Hiển thị hình ảnh
    const image = document.getElementById('specificImage');
    image.style.display = 'block';
    
});
document.getElementById("actionButton").addEventListener("click", function() {
  const image = document.getElementById("DangGiaKiet");
  image.style.display = "block"; // Hiển thị hình ảnh
});
document.getElementById("actionButton").addEventListener("click", function() {
  const image = document.getElementById("QuocKiet");
  image.style.display = "block"; // Hiển thị hình ảnh
});
document.getElementById("actionButton").addEventListener("click", function() {
  const image = document.getElementById("HoangLong");
  image.style.display = "block"; // Hiển thị hình ảnh
});