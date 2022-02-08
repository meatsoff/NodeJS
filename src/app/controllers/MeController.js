const Course = require('../models/Course');
const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        // let courseQuery = Course.find({});

        // if(req.query.hasOwnProperty('_sort')) {
        //     const isValidType = ['asc', 'desc'].includes(req.query.type);
        //     courseQuery = courseQuery.sort({
        //         [req.query.column]: isValidType ? req.query.type : 'desc'
        //     })
        // }


        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted()
        ])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);

        //Course.countDocumentsDeleted()
        //    .then((deleteCount) => {
        //        console.log(deleteCount)
        //    })
        //    .catch(() => {})

        //Course.find({})
        //    .then(courses => res.render('me/stored-courses', {
        //        courses: multipleMongooseToObject(courses)
        //    }))
        //    .catch(next)
    }

    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

// module.exports -> xuất ra ngoài
module.exports = new MeController();
