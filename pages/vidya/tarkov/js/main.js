$(function() {
  var items = $('.checklist li');
  items.each(function(i, ele) {
    $(ele).attr('data-id', i);
  });

  // Construct checklist headers
  $('.checklist-header').each(constructHeader);

  // Construct checklists and checkboxes
  $('.checklist').each(constructChecklist);
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
'<a href="#{0}" data-toggle="collapse" class="btn btn-primary btn-collapse btn-sm collapsed">' +
'<i class="fas fa-folder"></i>' +
'</a>' +
'<span class="align-middle">{1}</span>';


checkTemplate =
'<label>' +
'<input type="checkbox">' +
'{0}' +
'</label>';


function constructHeader(_, ele) {
  var content = $(ele).html();
  content = collapserBtnTemplate.format($(ele).attr('data-target'), content);
  $(ele).html(content);
  $(ele).find('a.btn-collapse').click(function() {
    $(ele).find('svg').toggleClass('fa-folder-open fa-folder');
  });
}


function constructChecklist(_, ele) {
  var checkboxIdPrefix = $(ele).attr('id');
  $(ele).find('li').each(function(i, item) {
    $(item).attr('id', checkboxIdPrefix + '-' + (i+1));
    constructCheckbox($(item));
  });
}


function constructCheckbox(ele) {
  var content = $(ele).html();
  var sublists = $(ele).children('ul');
  content = checkTemplate.format(content);
  $(ele).html(content).append(sublists);

  var dataId = $(ele).attr('data-id');
  var check = $(ele).find('input');
  check.prop('checked', $.jStorage.get(dataId, false));
  check.click(function() {
    $.jStorage.set(dataId, $(check).prop('checked'));
  });
}
