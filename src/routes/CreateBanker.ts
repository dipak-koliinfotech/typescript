import { Banker } from './../entities/Banker';
import express from 'express';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
    const { firstName, middleName, lastName, email, cardNumber, employeeNumber } = req.body

    try {
        const banker = Banker.create({
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            email: email,
            card_number: cardNumber,
            employee_number: employeeNumber
        })

        await banker.save();
        return res.status(200).json({ banker: banker })

    } catch (error) {
        return res.status(200).json({ message: error })

    }
})


export {
    router as CreateBankerRouter
}