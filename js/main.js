document.addEventListener('DOMContentLoaded', function () {
  // Всплывающее меню
  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);
  // Модальное окно 1
  var modal1 = document.querySelectorAll('.modal');
  var instances_modal1 = M.Modal.init(modal1);
  // Модальное окно 1
  var modal2 = document.querySelectorAll('.modal');
  var instances_modal2 = M.Modal.init(modal2);
});