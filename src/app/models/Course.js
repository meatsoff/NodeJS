const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        vidId: { type: String, maxLength: 255, required: true },
        level: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

// Custom query helpers
CourseSchema.query.sortable = function (req){
    if(req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc'
        })
    }
    return this;
}

// Add plugin
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', CourseSchema);
