module.exports = function(app){
app.get('/:timestamp', function (req, res) {
  res.send('Hello ! '+req.params.timestamp)
})
};
