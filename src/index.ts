import app from './App'
import sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

const port = 3000//process.env.PORT || 8081

app.listen(port,()=>{
  console.log('app listing to ', port);
})