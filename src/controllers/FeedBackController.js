import feedBackService from "../services/FeedBackService.js";

const createFeedBack = async (req,res)=>{
    try{
        const info = await feedBackService.createFeedBack(req.body);
        return res.status(200).json(info);
    }catch(e){
        return res.status(500).json({
            status: 500,
            message: e.message
        });
    }
}

const updateFeedBack = async (req, res) => {
    try {
        const id = req.params.id;
        const info = await feedBackService.updateFeedBack(id, req.body);
        return res.status(200).json(info);
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: "Error from server"
    });
}
}

const getAllFeedBack = async (req, res) => {
    try {
        const data = await feedBackService.getAllFeedBack();
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

const deleteFeedBack = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await feedBackService.deleteFeedBack(id);
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: "Error from server"
        })
    }
}

const getFeedBackByDoctorId = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const data = await feedBackService.getFeedBackByDoctorId(doctorId);
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: "Error from server"
        })
    }
}

const checkFeedBacked = async (req, res) => {
    try{
        const {patientId, doctorId, date} = req.body;
        // console.log(req.body)
        const data = await feedBackService.checkFeedBacked(patientId, doctorId, date);
        return res.status(200).json({
            status: 200,
            message: "Commented",
            data: data
        })
        
    }catch(err){
        return res.status(500).json({
            status: 500,
            message: "Error from server"
        })
    }
}

const getAllFeedBackByFilter=async(req,res)=>{
    try {
        // Gọi service và truyền query từ request
        const data = await feedBackService.getAllFeedBackByFilter(req.query);
        // console.log('Query received:', req.query);

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Error from server',
        });
    }
}
export default {
    createFeedBack, 
    updateFeedBack,
    getAllFeedBack,
    deleteFeedBack,
    getFeedBackByDoctorId,
    checkFeedBacked,
    getAllFeedBackByFilter
}