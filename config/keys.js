if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://denis:Adele260122@cluster0.zjswf.mongodb.net/productive?retryWrites=true&w=majority',
    secret: 'messi>ronaldo',
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost:27017/productive',
    secret: 'messi>ronaldo',
  };
}
