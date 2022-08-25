import express from 'express';
import { Router } from 'express';
import User from '../models/userSchema.js'

const router = express.Router();

router.route('/create').post((req, res) => {
    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const highestQualification = req.body.highestQualification;
    const newUser = new User({
        fullname,
        phone,
        email,
        address,
        highestQualification
    });
    newUser.save()
});

router.route('/users').get((req, res) => {
    User.find()
    .then(foundUser => res.json(foundUser))

})

export default router; 