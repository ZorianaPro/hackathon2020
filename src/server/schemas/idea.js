const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = new Schema(
  {
    name: {
      unique: true,
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "member",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true,
    emitIndexErrors: true,
  }
);

ideaSchema.plugin(require("mongoose-autopopulate"));

const handleErr = function (error, res, next) {
  if (error.name === "MongoError") {
    if (error.code === 11000) {
      if (error.keyPattern.name) {
        next(
          new Error(
            `Idea with this name already exists. Please, use a different name for your idea`
          )
        );
      } else {
        next(new Error(`There was a duplicate key error`));
      }
    } else {
      next(
        new Error(
          `Something went terribly wrong. Contact zoryana.lesyk@experteer.com to fix it`
        )
      );
    }
  } else {
    next();
  }
};

ideaSchema.post("save", handleErr);
ideaSchema.post("update", handleErr);
ideaSchema.post("findByIdAndUpdate", handleErr);

module.exports = ideaSchema;
