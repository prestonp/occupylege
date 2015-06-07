function updateOccupyResults(data) {
  var prefix = data.chamber.indexOf('Senate') < 0 ? 'Representative' : 'Senator';
  var name = prefix + ' ' + data.name;

  var $welcomeRepName = $('#welcomeRepName');
  $welcomeRepName.html(name);

  var $callRepButton = $('#callRepButton');
  var phone = data.districtPhone || data.capitalPhone || '';
  $callRepButton.attr('href', 'tel:' + phone.replace(/[-()\s]/g, ''));
  $callRepButton.html('Call ' + data.name + ' Now!');

  var $emailRepName = $('#emailRepName');
  $emailRepName.html(name);

  var $emailButton = $('#emailButton');
  $emailButton.html('Email ' + name + ' Now!');
  $emailButton.attr('href', 'mailto:' + data.email);
}

function toggleView() {
  $('#occupyMain, #occupyResults, #occupyCall, #occupyEmail').toggleClass('hide');
}
