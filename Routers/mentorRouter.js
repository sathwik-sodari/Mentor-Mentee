import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Mentor from '../models/mentorModel.js';
import { generateToken, isAuth, isAdmin } from '../utils.js';
import data from '../data.js';
import User from '../models/menteeModel.js';

const mentorRouter = express.Router();

mentorRouter.get('/seed',  expressAsyncHandler (async(req, res) => {
  // await User.remove({});
  const createdMentors = await Mentor.insertMany(data.mentors);
  res.send({ createdMentors });
}));

mentorRouter.get(
  '/allmentors',
  expressAsyncHandler(async (req, res) => {
    const mentors = await Mentor.find({});
    res.send({mentors:mentors});
  })
);

mentorRouter.get('/getMentor/:id', expressAsyncHandler(async(req, res) => {
    const user = await Mentor.findById(req.params.id);
    if(user){
        res.send(user);
    } else{
        res.status(404).send({ message: 'User Not Found' });
    }
}));

mentorRouter.post('/signin', expressAsyncHandler (async(req, res) => {
  const mentor = await Mentor.findOne({ email: req.body.email });

  if(mentor){
      if(bcrypt.compareSync(req.body.password, mentor.password)){
          res.send({
              _id: mentor._id,
              name: mentor.name,
              email: mentor.email,
              fulladdress: mentor.fulladdress,
              city: mentor.city,
              state: mentor.state,
              gender: mentor.gender,
              pincode: mentor.pincode,
              phoneNumber: mentor.phoneNumber,
              hobbies: mentor.hobbies,
              careerPref: mentor.careerPref,
              firstLang: mentor.firstLang,
              secondLang: mentor.secondLang,
              genderPref: mentor.genderPref,
              isAdmin: mentor.isAdmin,
              token: generateToken(mentor),
              message:"mentor login success"
          });
          return;
      }
  }
  res.status(401).send({ message: 'Invalid email or password' });
}));



mentorRouter.get('/cancel/:id',isAuth,expressAsyncHandler(async (req, res) =>{
  const mentor=await Mentor.findById(req.params.id)
  const menteeId=mentor.mentee
  const mentee=await User.findById(menteeId)
  if(mentor.mentee!=null){
    mentor.mentee=null
    const updatedMentor=await mentor.save()
  }
  if(mentee.mentor!=null){
    user.mentor=null
    const updatedUser=await mentee.save()
  }
  res.send({message:"updated successully"})

}))


// assigned = true;

mentorRouter.get('/getMentee/:m_id', expressAsyncHandler(async(req, res) => {
  const mentor = await Mentor.findById(req.params.m_id);
  console.log("mentee details")
  if(mentor.mentee===null){
    res.send({message:'No Mentee Assigned'});
  } 
  const mentee=await User.findById(mentor.mentee)
  if(mentee){
      res.send({menteeObj:mentee});
      // this.assigned=false; 
  } 
  else{
      res.status(404).send({ message: 'User Not Found' });
  }
}));


export default mentorRouter;