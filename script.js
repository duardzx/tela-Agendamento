function showSection(id) {
  const sections = document.querySelectorAll('.card');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
