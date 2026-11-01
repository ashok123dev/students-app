const Student = require("../models/Student")


//GET STUDENTS

const getstudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json(students)
    } catch (error) {
        return res.status(500).json({
            message: "failed to get students"
        })
    }


}

//add students

const poststudents = async (req, res) => {

    try {
        const student = await Student.create(req.body);
        return res.status(201).json(student)
    } catch (error) {
        return res.status(400).json({
            message: "error couured", error: error.message
        })
    }
}

//update students

const updatestudents = async (req, res) => {

    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,

            { new: true, runValidators: true }
        )

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        return res.status(200).json(student)
    } catch (error) {
        return res.status(400).json({
            message: "failed to update",
            error: error.message,
        })

    }
}


//delete students
const deletestudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id,
        )
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        return res.status(200).json(student)
    } catch (error) {
        return res.status(400).json({
            message: "failed to delete",
            error: error.message
        })
    }

}
module.exports = {
    getstudents,
    poststudents,
    updatestudents,
    deletestudent
}