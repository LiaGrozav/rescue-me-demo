//Queries to display Pet Cards or Users (in this case just the shelters, this feature is not finished yet)

class APIQueries {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const exclude = ["page", "sort", "limit", "fields"];
    exclude.forEach((el) => delete queryObj[el]);

    const queryStr = JSON.stringify(queryObj);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");// if there's no criteria added by the user, it'd be sorted the latest created
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");// excludes info that user don't need but it's created by default
    }

    return this;
  }

  paginate() {
    const page = +this.queryString.page  || 1;
    const limit = +this.queryString.limit|| 50;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIQueries
