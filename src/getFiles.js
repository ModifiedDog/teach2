import {fauxJAX} from './fauxJAX'

export function getFiles(files, fn) {
    fn = fn || (x => console.log(x))
    var pending = files.map(function (file) {
	var result = {}
	fauxJAX(file, f => {
	    result.file = f
	    while (pending.length && 'file' in pending[0]) {
		fn(pending.shift().file)
	    }
	});
	return result;
    });
}
