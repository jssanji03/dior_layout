$(function () {
  $('.datatable-RWDcard').DataTable({
    "responsive": false,
    "lengthChange": false,
    "autoWidth": false,
    "searching": false,
    "paging": false,
    "info": false,
    "language": {
      "info": "顯示 _PAGE_ 至 _PAGES_",
      "search": "搜尋 :",
      "paginate": {
        "previous": "上一頁",
        "next": "下一頁"
      },
      "lengthMenu": "顯示 _MENU_ 筆資料"
    },
        
    // "initComplete": function (settings, json) {
    //     $(".datatable-RWDcard").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
    // },
  }
  );
});