function ScriptCleaner(){
  ScriptCleaner.prototype.clean = function(str) {
    return str.replace(str, /<script[^>]*>(.*?)<\/script[^>]*>/gi, '');
  }
}

exports.module = ScriptCleaner;
