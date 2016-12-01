module.exports = function(app){
    app.get('/:timestamp', function (req, res) {
        var attr = req.params.timestamp;
        var obj = {
            unix : null,
            natural: null
        }
        if(/^\d+$/.test(attr)){
            var myDate = new Date(attr*1000);
            if (myDate.getTime()>0) {
                obj.unix = attr;
                obj.natural = myDate.toString();
            }
        }else {
            if (Date.parse(attr)) {
                obj.unix = Date.parse(attr);
                obj.natural = attr;
            }
        }

      res.json(obj)
    })
};
