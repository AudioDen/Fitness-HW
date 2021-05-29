

app.get(function(req,res ){
  res.sendFile(path.join(_dirname,"../public/exercise.html"))
});

app.get(function(req,res ){
  res.sendFile(path.join(_dirname,"../public/stats.html"))
});
app.get(function(req,res ){
  res.sendFile(path.join(_dirname,"../public/index.html"))
});
app.get(function(req,res ){
  res.sendFile(path.join(_dirname,"../public/.html"))
});