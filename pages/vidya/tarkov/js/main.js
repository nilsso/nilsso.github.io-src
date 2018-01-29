// Only to be incremented if any of the key lists were changed (item
// additions/removals) and thus was a change in the number of keys. NOT to be
// incremented for changing key discriptions (content).
var version = 0;


$(function() {
  // Populate data IDs
  $('.checklist li').each(function(i, ele) {
    $(ele).attr('data-id', i);
  });

  // Nuke saved keys if version differs
  var storedVersion = $.jStorage.get('version');
  if (storedVersion != null && storedVersion != version) {
    $.jStorage.flush();
    alert('A change in version caused a reset to saved keys.');
  }
  $.jStorage.set('version', version);

  // Construct checklist headers
  $('.checklist-header').each(constructHeader);

  // Construct checklists and checkboxes
  $('.checklist').each(constructChecklist);
});


function constructHeader(_, ele) {
  var content = $(ele).html();
  content = 
    '<a href="#' + $(ele).attr('data-target') + '" data-toggle="collapse" class="btn btn-primary btn-collapse btn-sm collapsed">' +
    '<i class="fas fa-folder"></i>' +
    '</a>' +
    '<span class="align-middle">' + content + '</span>';
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
  content =
    '<div>' +
    '<label>' +
    '<input type="checkbox">' +
    '<span>' + content + '</span>' +
    '</label>' +
    '</div>';
  $(ele).html(content).append(sublists);

  var dataId = $(ele).attr('data-id');
  var check = $(ele).find('input');
  check.prop('checked', $.jStorage.get(dataId, false));
  check.click(function() {
    if ($(check).prop('checked')) {
      $.jStorage.set(dataId, true);
    } else {
      $.jStorage.deleteKey(dataId);
    }
  });
}
