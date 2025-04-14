document.getElementById('actionButton').addEventListener('click', function() {
    const members = ['Phùng Quốc Kiệt', 'Đặng Gia Kiệt', 'Hồ Hoàng Long'];
    const list = members.map(name => `<li>${name}</li>`).join('');
    document.getElementById('membersList').innerHTML = `<ul>${list}</ul>`;
  });
  