function getFiles(files) {
  var pending = files.map(function (file) {
    var result = {};
    fauxJAX(file, f => {
      result.file = f;
      while (pending.length && 'file' in pending[0]) {
        console.log(pending.shift().file);
      }
    });
    return result;
  });
}
