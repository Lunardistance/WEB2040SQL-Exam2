module.exports = (mongoose) => {
    const noteStructure = mongoose.Schema({
      author: String,
      description: String,
      create_date: { type: Date, default: Date.now() }
    });
  
    return mongoose.model('Note', noteSchema);
  };