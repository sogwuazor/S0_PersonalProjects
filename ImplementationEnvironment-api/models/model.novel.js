class NovelModel {
  constructor(data) {
    try {
      this.author = data.author;
      this.title = data.title;
      this.publicationLocation = data.publicationLocation;
      this.description = data.description;
      this.createdOn = data.createdOn;
      this.lastModifiedDt = data.lastModifiedDt;
      this.lastModifiedBy = data.lastModifiedBy;
      this.totalChapters = data.totalChapters;
      this.genre = data.genre;
      this.source = data.source;
    } catch (ex) {
      console.log(ex.message);
      throw new Error('Provided data has an invalid format.');
    }

  }
}
