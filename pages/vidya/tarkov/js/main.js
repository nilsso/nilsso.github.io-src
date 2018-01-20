$(function() {
  $('.checklist-header').each(function() {
    addCollapse(this);
    $(this).find('a.btn-collapse').click(function() {
      $(this).find('svg').toggleClass('fa-folder-open fa-folder');
    });
  });
  $('.checklist').each(function() {
    var checklistDataId = $(this).attr('data-id');
    var itemDataIdPrefix = checklistDataId.substr(0, checklistDataId.length - 1);
    $(this).find('li').each(function(i, ele) {
      $(ele).attr('data-id', itemDataIdPrefix + '_' + ('00' + (i+1)).slice(-2));
      addCheckbox($(ele));
    });
  });
});


String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};


collapserBtnTemplate =
'<a href="#{0}_col" data-toggle="collapse" class="btn btn-primary btn-collapse btn-sm collapsed">' +
'<i class="fas fa-folder"></i>' +
'</a>' +
'<span class="align-middle">{1}</span>';

checkTemplate =
'<div class="checkbox">' +
'<label>' +
'<input type="checkbox" id="{0}">' +
'<span class="item_content">{1}</span>' +
'</label>' +
'</div>';


function addCollapse(ele) {
  var $ele = $(ele);
  var content = $ele.html();
  content = collapserBtnTemplate.format($ele.attr('id'), content);
  $ele.html(content);
}


function addCheckbox(ele) {
  var $ele = $(ele);
  var content = $ele.html();
  var sublists = $ele.children('ul');
  content = checkTemplate.format($ele.attr('data-id'), content);
  $ele.html(content).append(sublists);
}
