import { Client } from './../entities/Client';
import express from 'express';

const router = express.Router();

router.post('/api/client', async (req, res) => {
    const { firstName, middleName, lastName, email, cardNumber, balance } = req.body

    try {
        const client = Client.create({
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            email: email,
            card_number: cardNumber,
            balance: balance
        })

        await client.save();
        return res.status(200).json({ client: client })

    } catch (error) {
        return res.status(200).json({ message: error })

    }
})


export {
    router as CreateClientRouter
}